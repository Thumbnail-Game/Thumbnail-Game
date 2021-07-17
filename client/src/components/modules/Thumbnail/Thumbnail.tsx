import { useContext, useState, useEffect } from 'react'
import { Dispatch, SetStateAction } from 'react'

import { auth } from '../../../config/firebaseConfig'
import {
  GetTwoVideosQuery,
  useGetUserQuery,
  useGetTwoVideosQuery,
  useInvalidateMutation,
  useAddGameMutation,
} from '../../../generated/graphql'
import {
  PlayIcon,
  AnimatedViewText,
  Timer,
  LoseWinAnimation,
} from '../../elements/index'
import { GameSummary } from '../index'
import { HeaderText } from '../../../styles/constantStyles'
import { SoundContext } from '../../../providers/AppProvider'
import { useAudio } from '../../../hooks/useAudio'
import * as Styled from './Thumbnail.styled'

export interface SeenVideos {
  [index: number]: {
    id: number
    title: string
    views: number
    thumbnail: string
    url: string
    isLoss?: boolean
  }
}

interface ThumbnailProps {
  gamemode: string
  score: number
  updateScore: (updateType: string) => void
  setGamemode: Dispatch<SetStateAction<string | null | undefined>>
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  gamemode,
  score,
  updateScore,
  setGamemode,
}) => {
  const { sound } = useContext(SoundContext)
  const [, toggleAudio] = useAudio('/audio/correct.wav')

  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [hasPicked, setHasPicked] = useState<boolean>(false)
  const [hiddenViews, setHiddenViews] = useState<boolean>(true)
  const [updatedVideos, setUpdatedVideos] = useState<GetTwoVideosQuery>()
  const [mostViewed, setMostViewed] = useState<string>()

  //  keep track of videos already seen, do not want repeat, necessary for game end screen
  const [seenVideos, setSeenVideos] = useState<SeenVideos>([])
  const [seenVideoIds, setSeenVideoIds] = useState<number[]>([])

  const [isLoseAnimation, setIsLoseAnimation] = useState<boolean>(false)
  //  whether they have lost on time or incorrect choice
  const [loseType, setLoseType] = useState<string>()
  const [isLoadingVideos, setIsLoadingVideos] = useState<boolean>(false)

  const [videos] = useGetTwoVideosQuery({
    variables: {
      videoIds: seenVideoIds ? seenVideoIds : [],
    },
  })
  const videoData = videos && videos.data

  const uid = auth?.currentUser?.uid
  const [user] = useGetUserQuery({ variables: { uid: uid ? uid : '' } })
  const userData = user && user.data

  //  this mutation will invalidate the cache and cause useGetTwoVideosQuery to refetch
  const [, invalidateVideos] = useInvalidateMutation()
  const [, addGame] = useAddGameMutation()

  const videoWidth = 672
  const videoHeight = 378

  useEffect(() => {
    //  invalidate upon load incase user clicks off and reloads, need to refetch to prevent cheating
    invalidateVideos()
  }, [])

  useEffect(() => {
    setUpdatedVideos(videoData)
    setIsLoadingVideos(false)

    if (videos.data && typeof handleFirstMostViewed === 'function') {
      handleFirstMostViewed()
      handleUpdateSeenVideos()
    }
  }, [videos])

  const handleFirstMostViewed = () => {
    if (videoData?.twoVideos) {
      const isFirstMostViewed =
        videoData.twoVideos[0].views > videoData.twoVideos[1].views

      setMostViewed(isFirstMostViewed ? 'video1' : 'video2')
    }
  }

  const handleUpdateSeenVideos = () => {
    setSeenVideos((oldSeenVideos): any => {
      if (videoData?.twoVideos && Array.isArray(oldSeenVideos)) {
        const tempVideos = [...oldSeenVideos]
        const firstVideo = videoData.twoVideos[0]
        const secondVideo = videoData.twoVideos[1]

        //  do not add if duplicate
        for (const vid of tempVideos) {
          if (vid.id === firstVideo.id) return oldSeenVideos
        }

        tempVideos.push({
          id: firstVideo.id,
          title: firstVideo.title,
          thumbnail: firstVideo.thumbnail,
          views: firstVideo.views,
          url: firstVideo.url,
        })
        tempVideos.push({
          id: secondVideo.id,
          title: secondVideo.title,
          thumbnail: secondVideo.thumbnail,
          views: secondVideo.views,
          url: secondVideo.url,
        })
        return tempVideos
      }
    })
  }

  //  pass as a prop to GameSummary, can be called to Play Again
  const handleResetGameFromChild = async (changeGamemode: boolean) => {
    await invalidateAndFetch()

    setHasPicked(false)
    setIsPlaying(true)
    setIsLoseAnimation(false)
    updateScore('reset')
    setSeenVideos([])
    setSeenVideoIds([])

    //  set gamemode to null, this will unrender this component
    //  and render SelectGameMode
    if (changeGamemode) setGamemode(null)
    else setGamemode(gamemode)
  }

  //  invalidates the cache causing new video to be re-fetched
  const invalidateAndFetch = async () => {
    await invalidateVideos()
    if (!hiddenViews) setHiddenViews(true)

    if (videoData) {
      handleFirstMostViewed()
      setUpdatedVideos(videoData)

      handleUpdateSeenVideos()
    }
  }

  //  need to know how long the animation is playing before rendering other components
  const handleLoseAnimation = (loseType: string) => {
    //  best place to call is here, if loses on time, this is still called
    addGameToDatabase()

    //  running out of time needs to render an animation, the animation
    //  is renders if the user has already picked
    if (loseType === 'time') {
      setHasPicked(true)
    }
    setLoseType(loseType)

    setIsLoseAnimation(true)
    setTimeout(() => {
      setIsPlaying(false)
      setIsLoseAnimation(false)
      setLoseType('none')
    }, 1500)
  }

  const handleThumbnailClick = async (index: number) => {
    //  correct answer
    if (
      (index === 0 && mostViewed === 'video1') ||
      (index === 1 && mostViewed === 'video2')
    ) {
      if (sound === 'true') {
        toggleAudio()
      }
      updateScore('increment')

      //  wrong answer
    } else {
      if (Array.isArray(seenVideos)) {
        seenVideos[seenVideos.length - 1].isLoss = true
      }

      handleLoseAnimation('incorrect')
    }

    setHasPicked(true)
    setHiddenViews(false)
  }

  const addGameToDatabase = () => {
    const id = userData?.user?.id
    addGame({
      userId: id ? id : null,
      score,
      gamemode,
    })
  }

  if (videos.fetching || isLoadingVideos) {
    return <Styled.LinearLoader color="secondary" />
  }
  if (videos.error) {
    console.log(videos.error.message)
    return <p>There was an error</p>
  }

  return (
    <>
      {gamemode &&
        gamemode === 'timed' &&
        !isLoadingVideos &&
        !hasPicked &&
        isPlaying &&
        !isLoseAnimation && <Timer handleLoseAnimation={handleLoseAnimation} />}
      {(!isPlaying || isLoseAnimation) && (
        <GameSummary videos={seenVideos} reset={handleResetGameFromChild} />
      )}
      {isPlaying && (
        <Styled.TotalWrapper isLosingAnimation={isLoseAnimation}>
          <HeaderText>Which Video Has More Views?</HeaderText>
          <Styled.Container hasPicked={hasPicked}>
            {hasPicked && <LoseWinAnimation loseType={loseType} />}
            {updatedVideos?.twoVideos?.map((video, i) => (
              <Styled.VideoContainer key={i} hasPicked={hasPicked}>
                {!hiddenViews ? (
                  <Styled.ViewCount>
                    <AnimatedViewText animatedNum={video.views} />
                  </Styled.ViewCount>
                ) : (
                  <Styled.HiddenDiv />
                )}
                <Styled.Thumbnail>
                  {hasPicked && (
                    <>
                      <Styled.VideoLink href={video.url} target="_blank" />
                      <PlayIcon />
                    </>
                  )}
                  <Styled.VideoImage
                    src={video.thumbnail}
                    alt={`thumbnail-image-${i}`}
                    width={videoWidth}
                    height={videoHeight}
                    onError={() => invalidateAndFetch()}
                    onClick={() => {
                      if (!hasPicked) handleThumbnailClick(i)
                    }}
                  />
                  <Styled.Bar />
                </Styled.Thumbnail>
                <Styled.VideoText>{video.title}</Styled.VideoText>
              </Styled.VideoContainer>
            ))}
          </Styled.Container>
          {hasPicked && !isLoseAnimation && (
            <div style={{ textAlign: 'center' }}>
              <Styled.Button
                color="primary"
                onClick={() => {
                  setIsLoadingVideos(true)
                  invalidateAndFetch()
                  setHasPicked(false)
                }}
              >
                <Styled.ArrowHover>
                  <Styled.RightArrow size={70} />
                </Styled.ArrowHover>
                <Styled.Filler />
              </Styled.Button>
              <Styled.FillerDiv />
            </div>
          )}
        </Styled.TotalWrapper>
      )}
      {hasPicked &&
        (!isLoseAnimation ? isPlaying && <Styled.Shade2 /> : <Styled.Shade />)}

      {!hasPicked &&
        isPlaying &&
        (!isLoseAnimation ? <Styled.ShadeOut /> : <Styled.ShadeOut2 />)}
    </>
  )
}
