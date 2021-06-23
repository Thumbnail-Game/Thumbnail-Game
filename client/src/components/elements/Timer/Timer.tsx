import { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import * as Styled from './Timer.styled'

interface TimerProps {
  handleLoseAnimation: () => void
}

export const Timer: React.FC<TimerProps> = ({ handleLoseAnimation }) => {
  return (
    <Styled.CountdownWrapper>
      <CountdownCircleTimer
        size={80}
        isPlaying
        duration={5}
        strokeWidth={5}
        trailColor="#282828"
        colors="#FFFFFF"
        onComplete={handleLoseAnimation}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Styled.CountdownWrapper>
  )
}
