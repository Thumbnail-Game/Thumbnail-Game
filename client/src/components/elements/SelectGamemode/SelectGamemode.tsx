import { Dispatch, SetStateAction } from 'react'

import * as Styled from './SelectGamemode.styled'

interface SelectGamemodeProps {
  setGamemode: Dispatch<SetStateAction<string | null | undefined>>
}

export const SelectGamemode: React.FC<SelectGamemodeProps> = ({
  setGamemode,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.TimedModeContainer onClick={() => setGamemode('timed')}>
        Timed Mode
      </Styled.TimedModeContainer>
      <Styled.CasualModeContainer onClick={() => setGamemode('casual')}>
        Casual Mode
      </Styled.CasualModeContainer>
    </Styled.Wrapper>
  )
}
