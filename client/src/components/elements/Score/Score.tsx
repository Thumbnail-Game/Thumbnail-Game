import { useState, useEffect } from 'react'
import { getCookie, setCookie } from '../../../util/cookies'

import * as Styled from './Score.styled'
import { SubText } from '../../../styles/constantStyles'

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

  return (
    <Styled.ScoreWrapper>
      <SubText>Score: {score}</SubText>
      <SubText suppressHydrationWarning>
        Highscore: {highScore ? highScore : 0}
      </SubText>
    </Styled.ScoreWrapper>
  )
}
