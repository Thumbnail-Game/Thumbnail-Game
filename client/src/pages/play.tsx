import { useState, useContext } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import { SignedInContext } from '../providers/AppProvider'
import { createUrqlClient } from '../util/index'
import { SelectGamemode } from '../components/elements/index'
import { Nav, Thumbnail } from '../components/modules/index'
import {
  Score,
  // MobileNotSupported,
  // TestThumbnailsExists,
} from '../components/elements/index'

const Play: NextPage = () => {
  const [gamemode, setGamemode] = useState<string | null>()
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

  return (
    <div id="playContainer">
      <Nav signedIn={signedIn} />
      {gamemode ? (
        <>
          <Score score={score} />
          <Thumbnail
            gamemode={gamemode}
            score={score}
            updateScore={updateScore}
            setGamemode={setGamemode}
          />
        </>
      ) : (
        <SelectGamemode setGamemode={setGamemode} />
      )}
      {/* <TestThumbnailsExists /> */}
    </div>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
