import { useState, useEffect } from 'react'

import {
  GetTwoVideosQuery,
  useGetTwoVideosQuery,
  useInvalidateMutation,
} from '../../../generated/graphql'
import { AnimatedViewText, Score, GameSummary } from '../../elements/index'
import * as Styled from './Thumbnail.styles'

export interface SeenVideos {
  [index: number]: {
    title: string
    views: number
    thumbnail: string
    url: string
  }
}

export const Thumbnail: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [score, setScore] = useState<number>(0)
  const [hasPicked, setHasPicked] = useState<boolean>(false)

  const [hiddenViews, setHiddenViews] = useState<boolean>(true)

  const [updatedVideos, setUpdatedVideos] = useState<GetTwoVideosQuery>()
  const [mostViewed, setMostViewed] = useState<string>()
  //  keep track of videos already seen, do not want repeat, necessary for game end screen
  const [seenVideos, setSeenVideos] = useState<SeenVideos>([])

  const [isLoseAnimation, setIsLoseAnimation] = useState<boolean>(false)

  const [videos] = useGetTwoVideosQuery()
  const videoData = videos && videos.data
  //  this mutation will invalidate the cache and cause useGetTwoVideosQuery to refetch
  const [, invalidateVideos] = useInvalidateMutation()

  useEffect(() => {
    //  logic to differentiate which video has more views
    if (videoData) {
      handleFirstMostViewed()
      setUpdatedVideos(videoData)

      setSeenVideos((oldSeenVideos): any => {
        if (videoData.twoVideos && Array.isArray(oldSeenVideos)) {
          const tempVideos = [...oldSeenVideos]
          tempVideos.push({
            title: videoData!.twoVideos[0].title,
            thumbnail: videoData?.twoVideos[0].thumbnail,
            views: videoData?.twoVideos[0].views,
            url: videoData?.twoVideos[0].url,
          })
          tempVideos.push({
            title: videoData?.twoVideos[1].title,
            thumbnail: videoData?.twoVideos[1].thumbnail,
            views: videoData?.twoVideos[1].views,
            url: videoData?.twoVideos[1].url,
          })
          return tempVideos
        }
      })
    }
    console.log(seenVideos)
  }, [videos])

  if (videos.fetching) return <p>Loading...</p>
  if (videos.error) return <p>There was an error</p>

  const handleFirstMostViewed = () => {
    if (videoData?.twoVideos) {
      const isFirstMostViewed =
        videoData.twoVideos[0].views > videoData.twoVideos[1].views

      setMostViewed(isFirstMostViewed ? 'video1' : 'video2')
    }
  }

  //  invalidates the cache causing new video to be re-fetched
  const invalidateAndFetch = async () => {
    //  fetching new videos, have to recalculate which has more views
    handleFirstMostViewed()

    await invalidateVideos()
    if (!hiddenViews) setHiddenViews(true)
  }

  //  need to know how long the animation is playing before rendering other components
  const handleLoseAnimation = () => {
    setIsLoseAnimation(true)
    setTimeout(() => {
      setIsPlaying(false)
      setIsLoseAnimation(false)
    }, 5000)
  }

  const handleThumbnailClick = async (index: number) => {
    if (index === 0 && mostViewed === 'video1') {
      setScore((oldScore) => oldScore + 1)
    } else if (index === 0 && mostViewed !== 'video1') {
      handleLoseAnimation()
    } else if (index === 1 && mostViewed === 'video2') {
      setScore((oldScore) => oldScore + 1)
    } else {
      handleLoseAnimation()
    }

    setHasPicked(true)
    setHiddenViews(false)
  }

  return (
    <>
      {isPlaying ? (
        <>
          <Styled.Container>
            <Score isPlaying={isPlaying} score={score} />
            {updatedVideos?.twoVideos?.map((video, i) => (
              <Styled.VideoContainer key={i}>
                {!hiddenViews && (
                  <Styled.ViewCount>
                    <AnimatedViewText animatedNum={video.views} />
                  </Styled.ViewCount>
                )}
                {hiddenViews && <Styled.HiddenDiv></Styled.HiddenDiv>}
                <Styled.Thumbnail>
                  <Styled.VideoImage
                    src={video.thumbnail}
                    alt={`thumbnail-image-${i}`}
                    width={672}
                    height={378}
                    onError={() => invalidateAndFetch()}
                    onClick={() => {
                      handleThumbnailClick(i)
                    }}
                  />
                  <Styled.Bar />
                </Styled.Thumbnail>
                <Styled.VideoText>{video.title}</Styled.VideoText>
              </Styled.VideoContainer>
            ))}
          </Styled.Container>
          {hasPicked && (
            <>
              {!isLoseAnimation ? (
                <div style={{ textAlign: 'center' }}>
                  <Styled.Button
                    color="primary"
                    onClick={() => {
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
              ) : (
                <div>Lose Animation playing</div>
              )}
            </>
          )}
        </>
      ) : (
        <GameSummary videos={seenVideos} />
      )}
    </>
  )
}
