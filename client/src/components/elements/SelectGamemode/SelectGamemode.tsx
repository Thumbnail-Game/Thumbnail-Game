import { useContext, Dispatch, SetStateAction } from 'react'

import { ThemeContext } from '../../../providers/AppProvider'
import * as Styled from './SelectGamemode.styled'

interface SelectGamemodeProps {
  setGamemode: Dispatch<SetStateAction<string | null | undefined>>
}

export const SelectGamemode: React.FC<SelectGamemodeProps> = ({
  setGamemode,
}) => {
  const { themeMode } = useContext(ThemeContext)

  return (
    <Styled.Wrapper>
      <Styled.GamemodeContainer onClick={() => setGamemode('timed')}>
        <Styled.TimedIcon color={themeMode === 'light' ? 'grey' : 'grey'} />
        <Styled.Title>Timed mode</Styled.Title>
        <Styled.Description>
          5 seconds to pick each thumbnail, scores are counted towards the
          leaderboard
        </Styled.Description>
      </Styled.GamemodeContainer>
      <Styled.GamemodeContainer onClick={() => setGamemode('casual')}>
        <Styled.CasualIcon color={themeMode === 'light' ? 'grey' : 'grey'} />
        <Styled.Title>Casual mode</Styled.Title>
        <Styled.Description>
          No time limit, scores do not count towards the leaderboard
        </Styled.Description>
      </Styled.GamemodeContainer>
    </Styled.Wrapper>
  )
}
