import { useState, useEffect } from 'react'

import { auth } from '../../../config/firebaseConfig'
import {
  GetTwoVideosQuery,
  useGetUserQuery,
  useGetTwoVideosQuery,
  useInvalidateMutation,
  useAddGameMutation,
} from '../../../generated/graphql'
import { AnimatedViewText, GameSummary } from '../../elements/index'
import { LoseWinAnimation } from '../../elements/LoseWinAnimation/LoseWinAnimation'
import { HeaderText } from '../../../styles/constantStyles'
import { PlayIcon } from '../../elements/PlayIcon/PlayIcon'
import * as Styled from './Thumbnail.styles'

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
  score: number
  updateScore: (updateType: string) => void
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ score, updateScore }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [hasPicked, setHasPicked] = useState<boolean>(false)
  const [hiddenViews, setHiddenViews] = useState<boolean>(true)
  const [updatedVideos, setUpdatedVideos] = useState<GetTwoVideosQuery>()
  const [mostViewed, setMostViewed] = useState<string>()

  //  keep track of videos already seen, do not want repeat, necessary for game end screen
  const [seenVideos, setSeenVideos] = useState<SeenVideos>([])
  const [seenVideoIds, setSeenVideoIds] = useState<number[]>([])

  const [isLoseAnimation, setIsLoseAnimation] = useState<boolean>(false)
  const [isLoadingVideos, setIsLoadingVideos] = useState<boolean>(false)

  const [videos] = useGetTwoVideosQuery({
    variables: {
      videoIds: seenVideoIds ? seenVideoIds : [],
    },
  })
  const videoData = videos && videos.data

  // const uid = auth?.currentUser?.uid
  // console.log(uid)
  // const [user] = useGetUserQuery({ variables: { uid: uid ? uid : '' } })
  // const userData = user && user.data
  // console.log(userData)

  //  this mutation will invalidate the cache and cause useGetTwoVideosQuery to refetch
  const [, invalidateVideos] = useInvalidateMutation()
  const [, addGame] = useAddGameMutation()

  // useEffect(() => {
  //   console.log(user.data?.user?.displayName)
  // }, [user])

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
  const handleResetGameFromChild = async () => {
    await invalidateAndFetch()

    setHasPicked(false)
    setIsPlaying(true)
    setIsLoseAnimation(false)
    updateScore('reset')
    setSeenVideos([])
    setSeenVideoIds([])
  }

  //  invalidates the cache causing new video to be re-fetched
  const invalidateAndFetch = async () => {
    await invalidateVideos()
    if (!hiddenViews) setHiddenViews(true)

    setSeenVideoIds((oldSeenVideosIds): any => {
      if (videoData?.twoVideos && Array.isArray(oldSeenVideosIds)) {
        const tempIds = [...oldSeenVideosIds]
        const firstVideo = videoData.twoVideos[0]
        const secondVideo = videoData.twoVideos[1]

        tempIds.push(firstVideo.id)
        tempIds.push(secondVideo.id)

        return tempIds
      }
    })

    if (videoData) {
      handleFirstMostViewed()
      setUpdatedVideos(videoData)

      handleUpdateSeenVideos()
    }
  }

  //  need to know how long the animation is playing before rendering other components
  const handleLoseAnimation = () => {
    setIsLoseAnimation(true)
    setTimeout(() => {
      setIsPlaying(false)
      setIsLoseAnimation(false)
    }, 1500)
  }

  const handleThumbnailClick = async (index: number) => {
    if (
      (index === 0 && mostViewed === 'video1') ||
      (index === 1 && mostViewed === 'video2')
    ) {
      updateScore('increment')
    } else {
      if (Array.isArray(seenVideos)) {
        seenVideos[seenVideos.length - 1].isLoss = true
      }

      // const id = userData?.user?.id
      // console.log('adding game with score: ', score, ' to id: ', id)
      // addGame({
      //   userId: id ? id : null,
      //   score,
      // })

      handleLoseAnimation()
    }

    setHasPicked(true)
    setHiddenViews(false)
  }

  if (videos.fetching || isLoadingVideos) return <p>Loading...</p>
  if (videos.error) {
    console.log(videos.error.message)
    return <p>There was an error</p>
  }

  return (
    <>
      {(!isPlaying || isLoseAnimation) && (
        <GameSummary videos={seenVideos} reset={handleResetGameFromChild} />
      )}
      {isPlaying && (
        <Styled.TotalWrapper isLosingAnimation={isLoseAnimation}>
          <HeaderText>Which Video Has More Views?</HeaderText>
          <Styled.Container hasPicked={hasPicked}>
            {hasPicked && <LoseWinAnimation result={isLoseAnimation} />}
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
                    width={672}
                    height={378}
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
