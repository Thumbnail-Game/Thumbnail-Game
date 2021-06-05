import { SeenVideos } from '../../modules/Thumbnail/Thumbnail'
import * as Styled from './GameSummary.styled'

interface GameSummaryProps {
  videos: SeenVideos
}

export const GameSummary: React.FC<GameSummaryProps> = ({ videos }) => {
  console.log(videos)
  return (
    <>
      <div></div>
    </>
  )
}
