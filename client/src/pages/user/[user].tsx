import { NextPage } from 'next'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { withUrqlClient } from 'next-urql'
import { MainProfile } from '../../components/elements/index'
import { ProfileChart } from '../../components/elements/index'
import { Nav } from '../../components/modules/index'
import { useGetUserQuery } from '../../generated/graphql'
import { auth } from '../../config/firebaseConfig'
import { createUrqlClient } from '../../util'
import { SignedInContext } from '../../providers/AppProvider'

const User: NextPage = () => {
  const router = useRouter()
  const { signedIn } = useContext(SignedInContext)

  const uid = auth?.currentUser?.uid
  console.log(uid)
  const [user] = useGetUserQuery({ variables: { uid: uid ? uid : '' } })
  const userData = user && user.data

  return (
    <>
      <Nav signedIn={signedIn} />
      <MainProfile />
      <ProfileChart />
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(User)
