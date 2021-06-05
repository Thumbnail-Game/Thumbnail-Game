import { SeenVideos } from '../../modules/Thumbnail/Thumbnail'
import * as Styled from './GameSummary.styled'

interface GameSummaryProps {
  videos: SeenVideos
}

export const GameSummary: React.FC<GameSummaryProps> = ({ videos }) => {
  console.log(videos)
  return (
    <>
      {Array.isArray(videos) &&
        videos.map((video, i: number) => (
          <>
            <div>Title: {video.title}</div>
            <div>
              Views: {Intl.NumberFormat().format(Math.round(video.views))}
            </div>
            <div>URL: {video.url}</div>
          </>
        ))}
    </>
  )
}
