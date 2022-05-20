import { useContext, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'

import { SignedInContext } from '../../../providers/AppProvider'
import { Footer } from '../../modules/index'
import * as Styled from './SelectGamemode.styled'

interface SelectGamemodeProps {
  setGamemode: Dispatch<SetStateAction<string | null | undefined>>
}

export const SelectGamemode: React.FC<SelectGamemodeProps> = ({
  setGamemode,
}) => {
  const { signedIn } = useContext(SignedInContext)

  const router = useRouter()

  return (
    <>
      <Styled.Wrapper>
        <Styled.GamemodeContainer onClick={() => setGamemode('timed')}>
          <Styled.TimedIcon color="grey" />
          <Styled.Title>Timed mode</Styled.Title>
          <Styled.Description>
            7 seconds to pick a thumbnail. Play competitively.
          </Styled.Description>
        </Styled.GamemodeContainer>
        <Styled.GamemodeContainer onClick={() => setGamemode('casual')}>
          <Styled.CasualIcon color="grey" />
          <Styled.Title>Casual mode</Styled.Title>
          <Styled.Description>
            No time limit. Scores do not count towards the leaderboard.
          </Styled.Description>
        </Styled.GamemodeContainer>
        <Styled.GamemodeContainer
          onClick={() => {
            if (signedIn) setGamemode('daily')
            else router.push('/register')
          }}
        >
          {signedIn ? (
            <Styled.DailyIcon color="grey" />
          ) : (
            <Styled.DailyLockedIcon color="grey" />
          )}
          <Styled.Title>Daily Challenge</Styled.Title>
          <Styled.Description>
            {!signedIn && (
              <Styled.SignUpText>
                Sign up to play this gamemode.
              </Styled.SignUpText>
            )}
            Score 10 to complete the challenge and earn achievements.
          </Styled.Description>
        </Styled.GamemodeContainer>
      </Styled.Wrapper>
      <Footer />
    </>
  )
}
