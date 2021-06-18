import { NextPage } from 'next'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { withUrqlClient } from 'next-urql'

import { GetUserByDisplayNameQuery, useGetUserByDisplayNameQuery } from '../../generated/graphql'
import { auth } from '../../config/firebaseConfig'
import { createUrqlClient } from '../../util'
import { SignedInContext } from '../../providers/AppProvider'
import { ProfileChart, MainProfile } from '../../components/elements/index'
import { Nav } from '../../components/modules/index'

const User: React.FC = () => {
  const router = useRouter()
  const { signedIn } = useContext(SignedInContext)

  const [user] = useGetUserByDisplayNameQuery({ variables: { displayName: router!.query!.user!.toString() } })
  const userData = user && user.data

  return (
    <>
      <Nav signedIn={signedIn} />
      {userData?.userByDisplayName ? (
        <>
          <MainProfile userData={userData} />
          <ProfileChart userData={userData} />
        </>
      ) : (
        <div>User does not exist</div>
      )
      }
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(User)
