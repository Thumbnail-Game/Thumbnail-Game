import { useState, useEffect } from 'react'

import {
  useGetTwoVideosQuery,
  useInvalidateMutation,
} from '../../../generated/graphql'
import { AnimatedViewText, Score } from '../../elements/index'
import * as Styled from './Thumbnail.styles'

export const Thumbnail: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [score, setScore] = useState<number>(0)
  const [hasPicked, setHasPicked] = useState<boolean>(false)

  const [hiddenViews, setHiddenViews] = useState<boolean>(true)

  const [updatedVideos, setUpdatedVideos] = useState<any>()
  const [mostViewed, setMostViewed] = useState<string | null>(null)

  const [videos] = useGetTwoVideosQuery()
  const videoData = videos && videos.data
  //  this mutation will invalidate the cache and cause useGetTwoVideosQuery to refetch
  const [, invalidateVideos] = useInvalidateMutation()

  useEffect(() => {
    //  logic to differentiate which video has more views
    if (videoData) {
      handleFirstMostViewed()
      setUpdatedVideos(videoData)
    }
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

  const handleThumbnailClick = async (index: number) => {
    if (index === 0 && mostViewed === 'video1') {
      setScore((oldScore) => oldScore + 1)
    } else if (index === 0 && mostViewed !== 'video1') {
      setScore((oldScore) => oldScore - 1)
    } else if (index === 1 && mostViewed === 'video2') {
      setScore((oldScore) => oldScore + 1)
    } else {
      setScore((oldScore) => oldScore - 1)
    }

    setHasPicked(true)
    setHiddenViews(false)
  }

  return (
    <>
      <Score isPlaying={isPlaying} score={score} />
      <Styled.Container>
        {updatedVideos?.twoVideos.map((video: any, i: number) => (
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
              <Styled.Bar></Styled.Bar>
            </Styled.Thumbnail>
            <Styled.VideoText>{video.title}</Styled.VideoText>
          </Styled.VideoContainer>
        ))}
      </Styled.Container>
      {hasPicked && (
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
            <Styled.Filler></Styled.Filler>
          </Styled.Button>
        </div>
      )}
    </>
  )
}
