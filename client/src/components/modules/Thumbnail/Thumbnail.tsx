import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi'

import {
  useGetTwoVideosQuery,
  useInvalidateMutation,
} from '../../../generated/graphql'
import { AnimatedViewText } from '../../elements/index'
import * as Styled from './Thumbnail.styles'

export const Thumbnail: React.FC = () => {
  const [hiddenViews, setHiddenViews] = useState<boolean>(true)

  const [videos] = useGetTwoVideosQuery()
  //  this mutation will invalidate the cache and cause useGetTwoVideosQuery to refetch
  const [, invalidateVideos] = useInvalidateMutation()

  const videoData = videos && videos.data

  if (videos.fetching) return <p>Loading...</p>
  if (videos.error) return <p>There was an error</p>

  const handleNewThumbnailClick = async () => {
    await invalidateVideos()
    if (!hiddenViews) setHiddenViews(true)
  }
  //  video.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return (
    <>
      <Styled.Container>

        {videoData?.twoVideos!.map((video, i) => (
          <>
            <Styled.VideoContainer key={i}>
              {!hiddenViews && (
                <Styled.ViewCount>
                  <AnimatedViewText animatedNum={video.views} />
                </Styled.ViewCount>
              )}
              <Image
                src={video.thumbnail}
                alt={`thumbnail-image-${i}`}
                layout="fixed"
                width={672}
                height={378}
                onError={() => handleNewThumbnailClick()}
                onClick={() => setHiddenViews(false)}
              />
              <Styled.Bar></Styled.Bar>
              <Styled.VideoText>{video.title}</Styled.VideoText>
            </Styled.VideoContainer>
          </>
        ))}
      </Styled.Container>
      <div style={{ textAlign: "center" }}>
        <Styled.Button
          color="primary"
          onClick={handleNewThumbnailClick}
        >
          <BiRightArrowAlt
            size={70}
            style={{
              marginTop: "4px",
              marginLeft: "-2px"
            }}
          ></BiRightArrowAlt>
          <Styled.Filler></Styled.Filler>
        </Styled.Button>
      </div>
    </>
  )
}
