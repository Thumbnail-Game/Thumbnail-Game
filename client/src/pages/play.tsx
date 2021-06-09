import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import { auth } from '../config/firebaseConfig'
import { Thumbnail } from '../components/modules/index'
import { Score } from '../components/elements/index'
import { Nav } from '../components/modules/index'
import { createUrqlClient } from '../util/index'

const Play: NextPage = () => {
  const [signedIn, setSignedIn] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    if (auth.currentUser) {
      console.log('current user signed in')
      console.log(auth.currentUser)
      setSignedIn(true)
    }
  }, [])

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

  return (
    <>
      <Nav signedIn={signedIn} />
      <Score score={score} />
      <Thumbnail updateScore={updateScore} />
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
