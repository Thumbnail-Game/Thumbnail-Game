import { useState, useEffect } from 'react'

import { getCookie, setCookie } from '../../../util/cookies'

import * as Styled from './Score.styled'

interface ScoreProps {
  score: number
}

export const Score: React.FC<ScoreProps> = ({ score }) => {
  const [highScore, setHighScore] = useState(getCookie('highscore'))

  useEffect(() => {
    if (!highScore) setCookie('highscore', '0')
    else if (highScore && score > highScore) {
      setCookie('highscore', `${score}`)
      setHighScore(score)
    }
  }, [score])

  return (
    <Styled.ScoreWrapper>
      <Styled.CurrentScore>Score: {score}</Styled.CurrentScore>
      <Styled.HighScore suppressHydrationWarning>
        Highscore: {highScore ? highScore : 0}
      </Styled.HighScore>
    </Styled.ScoreWrapper>
  )
}
