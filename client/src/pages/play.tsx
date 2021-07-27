import { useState, useContext } from 'react'
import { NextPage } from 'next'
import { Head } from 'next/document'
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
import React from 'react'

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
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="description"
          content="Play with your friends and pick which thumbnail has more views!"
        />
      </Head>
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
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
