import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Image from 'next/image'

import {
  GetTwoVideosQuery,
  useGetTwoVideosQuery,
  Videos,
} from '../../../generated/graphql'
import './Thumbnail.styles'

interface ThumbnailProps {}

export const Thumbnail: React.FC<ThumbnailProps> = ({}) => {
  const [videos] = useGetTwoVideosQuery()

  const videoData = videos && videos.data

  if (videos.fetching) return <p>Loading...</p>
  if (videos.error) return <p>There was an error</p>

  return (
    <>
      {videoData?.twoVideos!.map((video, i) => (
        <Image
          key={i}
          src={video.thumbnail}
          alt={`thumbnail-image-${i}`}
          layout="fixed"
          width={200}
          height={200}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('test')
        }}
      >
        Generate Random
      </Button>
    </>
  )
}
