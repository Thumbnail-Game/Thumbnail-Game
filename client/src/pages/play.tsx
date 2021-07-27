import { useState, useContext } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { NextSeo } from 'next-seo'

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
      <NextSeo
        title="The YouTube Thumbnail Game"
        description="Play with your friends and pick which thumbnail has more views!"
        canonical="https://www.thumbnailgame.com/"
        openGraph={{
          //url: 'https://www.url.ie/a',
          title: 'The YouTube Thumbnail Game',
          description:
            'Play with your friends and pick which thumbnail has more views!',
          // images: [
          //   {
          //     url: 'https://www.example.ie/og-image-01.jpg',
          //     width: 800,
          //     height: 600,
          //     alt: 'Og Image Alt',
          //   },
          //   {
          //     url: 'https://www.example.ie/og-image-02.jpg',
          //     width: 900,
          //     height: 800,
          //     alt: 'Og Image Alt Second',
          //   },
          //   { url: 'https://www.example.ie/og-image-03.jpg' },
          //   { url: 'https://www.example.ie/og-image-04.jpg' },
          // ],
          site_name: 'The YouTube Thumbnail Game',
        }}
        // twitter={{
        //   handle: '@handle',
        //   site: '@site',
        //   cardType: 'summary_large_image',
        // }}
      />
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
