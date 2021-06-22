import { useState, useContext } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import { SignedInContext } from '../providers/AppProvider'
import { createUrqlClient } from '../util/index'
import { Nav, Thumbnail } from '../components/modules/index'
import {
  Score,
  // MobileNotSupported,
  // TestThumbnailsExists,
} from '../components/elements/index'

const Play: NextPage = () => {
  const [score, setScore] = useState<number>(0)

  const { signedIn } = useContext(SignedInContext)

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

  // const supportedWidth = useMediaQuery('(min-width: 760px)')
  // if (!supportedWidth) return <MobileNotSupported />

  return (
    <div id="playContainer">
      <Nav signedIn={signedIn} />
      <Score score={score} />
      <Thumbnail score={score} updateScore={updateScore} />
      {/* <TestThumbnailsExists /> */}
    </div>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
