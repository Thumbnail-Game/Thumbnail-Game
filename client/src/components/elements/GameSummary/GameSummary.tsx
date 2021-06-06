import { Button } from '@material-ui/core'

import { SeenVideos } from '../../modules/Thumbnail/Thumbnail'
import * as Styled from './GameSummary.styled'

interface GameSummaryProps {
  videos: SeenVideos
  reset: () => void
}

export const GameSummary: React.FC<GameSummaryProps> = ({ videos, reset }) => {
  return (
    <>
      {Array.isArray(videos) &&
        videos.map((video, i: number) => (
          <div style={{ marginTop: '30px' }} key={i}>
            <pre>Title: {video.title}</pre>
            <pre>
              Views: {Intl.NumberFormat().format(Math.round(video.views))}
            </pre>
            <pre>URL: {video.url}</pre>
          </div>
        ))}
      <Button
        variant="contained"
        color="primary"
        style={{ zIndex: 4 }}
        onClick={() => {
          reset()
        }}
      >
        Play Again
      </Button>
    </>
  )
}
