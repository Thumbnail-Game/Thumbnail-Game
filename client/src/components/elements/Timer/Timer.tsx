import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import * as Styled from './Timer.styled'

interface TimerProps {
  handleLoseAnimation: () => void
}

export const Timer: React.FC<TimerProps> = ({ handleLoseAnimation }) => {
  return (
    <Styled.CountdownWrapper>
      <CountdownCircleTimer
        size={90}
        isPlaying
        duration={7}
        strokeWidth={8}
        trailColor="#282828"
        colors="#FFFFFF"
        onComplete={handleLoseAnimation}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Styled.CountdownWrapper>
  )
}
