import { useEffect, useState } from 'react'
import { useGetVideosQuery } from '../../../generated/graphql'

//	this components fetches every video and returns the thumbnails that cause an error. These videos will be removed from the database
export const TestThumbnailsExists: React.FC = () => {
  const [invalidVideos, setInvalidVideos] = useState<any>()

  const [videos] = useGetVideosQuery({ variables: { numVideos: 2650 } })
  const videoData = videos && videos.data

  useEffect(() => {
    console.log(invalidVideos)
  }, [invalidVideos])

  return (
    <>
      {videoData &&
        Array.isArray(videoData.getVideos) &&
        videoData.getVideos.map((video: any, i: number) => {
          return (
            <img
              src={video.thumbnail}
              alt={video.title}
              width={50}
              height={50}
              key={i}
              onLoad={(e) => {
                if (
                  e.currentTarget.naturalWidth === 120 &&
                  e.currentTarget.naturalHeight === 90
                ) {
                  console.log('found bad image')
                }
              }}
              onError={(e) => {
                setInvalidVideos((oldInvalidVideos: any) => {
                  let tempVideos: any = []
                  if (oldInvalidVideos) {
                    tempVideos = [...oldInvalidVideos]
                    tempVideos.push({
                      id: video.id,
                      title: video.title,
                      url: video.url,
                    })
                    return tempVideos
                  }
                  return tempVideos
                })
              }}
            />
          )
        })}
    </>
  )
}
