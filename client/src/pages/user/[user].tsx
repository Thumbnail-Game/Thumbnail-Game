import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { withUrqlClient } from 'next-urql'
import styled from 'styled-components'

import {
  useGetUserByDisplayNameQuery,
  useGetGamesByUserQuery,
} from '../../generated/graphql'
import { createUrqlClient } from '../../util'
import { SignedInContext } from '../../providers/AppProvider'
import { ProfileChart, TopPlays } from '../../components/elements/index'
import { Nav, MainProfile } from '../../components/modules/index'
import { BackButton } from '../../styles/constantStyles'

const User: React.FC = () => {
  const [gamemode, setGamemode] = useState<string>('timed')

  const router = useRouter()

  const { signedIn } = useContext(SignedInContext)

  const [user] = useGetUserByDisplayNameQuery({
    variables: { displayName: router!.query!.user!.toString() },
  })
  const userData = user && user.data

  const [games] = useGetGamesByUserQuery({
    variables: {
      userId: userData?.userByDisplayName
        ? userData?.userByDisplayName?.id
        : -1,
    },
  })
  const gamesData = games && games.data

  const handleToggleGamemode = () => {
    if (gamemode === 'timed') setGamemode('casual')
    else setGamemode('timed')
  }

  return (
    <div id="userProfile">
      <Nav signedIn={signedIn} />
      {userData?.userByDisplayName ? (
        <div style={{ position: 'relative' }}>
          {gamesData && (
            <Wrapper>
              <LeftComponent>
                <MainProfile
                  userData={userData}
                  gamesData={gamesData}
                  gamemode={gamemode}
                  handleToggleGamemode={handleToggleGamemode}
                />
                <ProfileChart gamesData={gamesData} gamemode={gamemode} />
              </LeftComponent>
              <TopPlays gamesData={gamesData} gamemode={gamemode} />
            </Wrapper>
          )}
        </div>
      ) : (
        <DoesNotExistContainer>
          {!user.fetching && (
            <div>
              <DoesNotExistText>User does not exist!</DoesNotExistText>
              <BackButton
                onClick={() => router.push('/play')}
                style={{ position: 'relative' }}
              />
            </div>
          )}
        </DoesNotExistContainer>
      )}
    </div>
  )
}

export const LeftComponent = styled.div`
  width: 100%;
`

export const Wrapper = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  margin-top: 20px;
  overflow: visible;

  @media (max-width: 710px) {
    justify-content: center;
    width: 100%;
  }
`

export const DoesNotExistContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const DoesNotExistText = styled.div`
  font-size: 90px;
`

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(User)
