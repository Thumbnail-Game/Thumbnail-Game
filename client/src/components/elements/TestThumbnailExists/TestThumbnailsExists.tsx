import { useEffect, useState } from 'react'
import { useGetVideosQuery } from '../../../generated/graphql'
import { ImageContainer } from '../Achievements/Achievements.styled'

//	this components fetches every video and returns the thumbnails that cause an error. These videos will be removed from the database
export const TestThumbnailsExists: React.FC = () => {
  const [invalidVideos, setInvalidVideos] = useState<any>()

  const [videos] = useGetVideosQuery({ variables: { numVideos: 3000 } })
  const videoData = videos && videos.data

  console.log(videoData)

  useEffect(() => {
    console.log(invalidVideos)
  }, [invalidVideos])

  return (
    <>
      {videoData &&
        Array.isArray(videoData.getVideos) &&
        videoData.getVideos.map((video: any, i: number) => (
          <img
            src={video.thumbnail}
            alt={`thumbnail-image-${i}`}
            width={50}
            height={50}
            key={i}
            onError={() =>
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
            }
          />
        ))}
    </>
  )
}
