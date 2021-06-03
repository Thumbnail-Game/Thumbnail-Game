import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Image from 'next/image'

import {
  useGetTwoVideosQuery,
  useInvalidateMutation,
} from '../../../generated/graphql'
import * as Styled from './Thumbnail.styles'

interface ThumbnailProps {}

export const Thumbnail: React.FC<ThumbnailProps> = ({}) => {
  const [hiddenViews, setHiddenViews] = useState<boolean>(true)

  const [videos] = useGetTwoVideosQuery()
  //  this mutation will invalidate the cache and cause useGetTwoVideosQuery to refetch
  const [, invalidateVideos] = useInvalidateMutation()

  const videoData = videos && videos.data

  if (videos.fetching) return <p>Loading...</p>
  if (videos.error) return <p>There was an error</p>

  const handleNewThumbnailClick = async () => {
    await invalidateVideos()
    setHiddenViews((oldHiddenViews) => !oldHiddenViews)
  }

  return (
    <>
      {videoData?.twoVideos!.map((video, i) => (
        <Styled.VideoContainer key={i}>
          <Image
            src={video.thumbnail}
            alt={`thumbnail-image-${i}`}
            layout="fixed"
            width={672}
            height={378}
            onClick={() => setHiddenViews(false)}
          />
          <Styled.VideoText>{video.title}</Styled.VideoText>
          {!hiddenViews && (
            <Styled.VideoText>
              {video.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Styled.VideoText>
          )}
        </Styled.VideoContainer>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleNewThumbnailClick}
      >
        Generate Random
      </Button>
    </>
  )
}
