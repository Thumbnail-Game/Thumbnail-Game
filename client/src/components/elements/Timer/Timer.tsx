import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import * as Styled from './Timer.styled'

interface TimerProps {
  handleLoseAnimation: (loseType: string) => void
}

export const Timer: React.FC<TimerProps> = ({ handleLoseAnimation }) => {
  return (
    <Styled.CountdownWrapper>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={7}
        strokeWidth={16}
        trailColor="#282828"
        colors="#FFFFFF"
        onComplete={() => handleLoseAnimation('time')}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Styled.CountdownWrapper>
  )
}
