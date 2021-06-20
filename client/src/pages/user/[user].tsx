import { useContext } from 'react'
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

const User: React.FC = () => {
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

  return (
    <div id="userProfile">
      <Nav signedIn={signedIn} />
      {userData?.userByDisplayName ? (
        <div style={{ position: 'relative' }}>
          {gamesData && (
            <Wrapper>
              <LeftComponent>
                <MainProfile userData={userData} gamesData={gamesData} />
                <ProfileChart gamesData={gamesData} />
              </LeftComponent>
              <TopPlays gamesData={gamesData} />
            </Wrapper>
          )}
        </div>
      ) : (
        <div>User does not exist</div>
      )}
    </div>
  )
}

export const LeftComponent = styled.div`
  width: 1000px;
`

export const Wrapper = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  margin-top: 20px;
  overflow: visible;
`

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(User)
