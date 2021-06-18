import { useState, useContext } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import { SignedInContext } from '../providers/AppProvider'
import { createUrqlClient } from '../util/index'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Nav, Thumbnail } from '../components/modules/index'
import { Score, MobileNotSupported } from '../components/elements/index'
import { auth } from '../config/firebaseConfig'
import { useGetUserQuery } from '../generated/graphql'

const Play: NextPage = () => {
  const [score, setScore] = useState<number>(0)

  const { signedIn } = useContext(SignedInContext)

  const uid = auth?.currentUser?.uid
  const [user] = useGetUserQuery({ variables: { uid: uid ? uid : '' } })
  const userData = user && user.data

  const updateScore = (updateType: string) => {
    if (updateType === 'increment') {
      setScore((oldScore) => oldScore + 1)
      //  probably never going to decrement, just in case
    } else if (updateType === 'decrement') {
      setScore((oldScore) => oldScore - 1)
    } else if (updateType === 'reset') {
      setScore(0)
    }
  }

  const supportedWidth = useMediaQuery('(min-width: 760px)')
  if (!supportedWidth) return <MobileNotSupported />

  return (
    <div id="playContainer">
      <Nav signedIn={signedIn} />
      <Score score={score} />
      <Thumbnail score={score} updateScore={updateScore} />
    </div>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
