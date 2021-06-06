import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  GetTwoVideosQuery,
  useGetTwoVideosQuery,
  useInvalidateMutation,
} from '../../../generated/graphql'
import { AnimatedViewText, Score, GameSummary } from '../../elements/index'
import { LoseWinAnimation } from '../../elements/LoseWinAnimation/LoseWinAnimation'
import * as Styled from './Thumbnail.styles'

export interface SeenVideos {
  [index: number]: {
    id: number
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
  const [seenVideoIds, setSeenVideoIds] = useState<number[]>([])

  const [isLoseAnimation, setIsLoseAnimation] = useState<boolean>(false)

  const [videos] = useGetTwoVideosQuery()
  const videoData = videos && videos.data
  //  this mutation will invalidate the cache and cause useGetTwoVideosQuery to refetch
  const [, invalidateVideos] = useInvalidateMutation()

  useEffect(() => {
    invalidateAndFetch()
  }, [])

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

    await invalidateVideos()
    if (!hiddenViews) setHiddenViews(true)

    if (videoData) {
      handleFirstMostViewed()
      setUpdatedVideos(videoData)

      setSeenVideos((oldSeenVideos): any => {
        if (videoData.twoVideos && Array.isArray(oldSeenVideos)) {
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
  }

  //  need to know how long the animation is playing before rendering other components
  const handleLoseAnimation = () => {
    setIsLoseAnimation(true)
    setTimeout(() => {
      setIsPlaying(false)
      setIsLoseAnimation(false)
    }, 2500)
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

          <Score isPlaying={isPlaying} score={score} />
          {hasPicked ? (
            <Styled.Container2>
              {updatedVideos?.twoVideos?.map((video, i) => (
                <Styled.VideoContainer key={i}>
                  {!hiddenViews && (
                    <Styled.ViewCount>
                      <AnimatedViewText animatedNum={video.views} />
                    </Styled.ViewCount>
                  )}
                  {hiddenViews && <Styled.HiddenDiv></Styled.HiddenDiv>}
                  <Styled.Thumbnail>
                    <a href={video.url} target="_blank">
                      <Styled.VideoImage
                        src={video.thumbnail}
                        alt={`thumbnail-image-${i}`}
                        width={739.2}
                        height={415.8}
                        onError={() => invalidateAndFetch()}
                        onClick={() => {
                          if (!hasPicked) handleThumbnailClick(i)
                        }}
                      >
                      </Styled.VideoImage>
                    </a>
                    <Styled.Bar />
                  </Styled.Thumbnail>
                  <Styled.VideoText>{video.title}</Styled.VideoText>
                </Styled.VideoContainer>
              ))}
            </Styled.Container2>
          ) : (
            <Styled.Container>
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
                        if (!hasPicked) handleThumbnailClick(i)
                      }}
                    />
                    <Styled.Bar />
                  </Styled.Thumbnail>
                  <Styled.VideoText>{video.title}</Styled.VideoText>
                </Styled.VideoContainer>
              ))}
            </Styled.Container>
          )}
          {hasPicked && (
            <>
              {!isLoseAnimation ? (
                <div style={{ textAlign: 'center' }}>
                  <LoseWinAnimation result={isLoseAnimation} />
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
                <LoseWinAnimation result={isLoseAnimation} />
              )}
            </>
          )}
        </>
      ) : (
        <GameSummary videos={seenVideos} />
      )}
      {hasPicked ? (
        <>
          {!isLoseAnimation ? (
            <Styled.Shade2></Styled.Shade2>
          ) : (
            <Styled.Shade></Styled.Shade>
          )
          }
        </>
      ) : (
        <>
          {!isLoseAnimation ? (
            <Styled.ShadeOut></Styled.ShadeOut>
          ) : (
            <Styled.ShadeOut2></Styled.ShadeOut2>
          )
          }
        </>
      )}
    </>
  )
}
