import { useState } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import { Thumbnail } from '../components/modules/index'
import { Score } from '../components/elements/index'
import { Nav } from '../components/modules/index'
import { createUrqlClient } from '../util/index'

const Play: NextPage = () => {
  const [score, setScore] = useState<number>(0)

  const updateScore = (updateType: string) => {
    console.log(updateType)
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
      <Nav />
      <Score score={score} />
      <Thumbnail updateScore={updateScore} />
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
