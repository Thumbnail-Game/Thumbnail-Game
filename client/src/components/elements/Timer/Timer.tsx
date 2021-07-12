import { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

import { ThemeContext } from '../../../providers/AppProvider'
import * as Styled from './Timer.styled'

interface TimerProps {
  handleLoseAnimation: (loseType: string) => void
}

export const Timer: React.FC<TimerProps> = ({ handleLoseAnimation }) => {
  const { themeMode } = useContext(ThemeContext)

  const mobileShift = useMediaQuery('(min-width: 390px)')
  return (
    <Styled.CountdownWrapper mobileShift={mobileShift}>
      <CountdownCircleTimer
        size={mobileShift ? 160 : 120}
        isPlaying
        duration={7}
        strokeWidth={mobileShift ? 18 : 16}
        trailColor={themeMode === 'dark' ? '#282828' : '#FFFFFF'}
        // colors={themeMode === 'dark' ? '#FFFFFF' : '#282828'}
        colors={'#FF0000'}
        onComplete={() => handleLoseAnimation('time')}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Styled.CountdownWrapper>
  )
}
