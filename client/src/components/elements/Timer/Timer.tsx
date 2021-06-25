import { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { ThemeContext } from '../../../providers/AppProvider'
import * as Styled from './Timer.styled'

interface TimerProps {
  handleLoseAnimation: (loseType: string) => void
}

export const Timer: React.FC<TimerProps> = ({ handleLoseAnimation }) => {
  const { themeMode } = useContext(ThemeContext)

  return (
    <Styled.CountdownWrapper>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={7}
        strokeWidth={16}
        trailColor={themeMode === 'dark' ? '#282828' : '#FFFFFF'}
        colors={themeMode === 'dark' ? '#FFFFFF' : '#282828'}
        onComplete={() => handleLoseAnimation('time')}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Styled.CountdownWrapper>
  )
}
