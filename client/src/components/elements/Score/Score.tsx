import { useState, useEffect } from 'react'
import { getCookie, setCookie } from '../../../util/cookies'

interface ScoreProps {
  isPlaying: boolean
  score: number
}

export const Score: React.FC<ScoreProps> = ({ isPlaying, score }) => {
  const [highScore, setHighScore] = useState(getCookie('highscore'))
  useEffect(() => {
    if (!highScore) setCookie('highscore', '0')
    else if (highScore && score > highScore) {
      setCookie('highscore', `${score}`)
      setHighScore(score)
    }
  }, [score])

  if (isPlaying)
    return (
      <div>
        <div>Score: {score}</div>
        <div suppressHydrationWarning>
          Highscore: {highScore ? highScore : 0}
        </div>
      </div>
    )
  else {
    return (
      <>
        <div>Not currently Playing</div>
      </>
    )
  }
}
