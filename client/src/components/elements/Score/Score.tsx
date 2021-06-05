interface ScoreProps {
  isPlaying: boolean
  score: number
}

export const Score: React.FC<ScoreProps> = ({ isPlaying, score }) => {
  return <div>Score: {score}</div>
}
