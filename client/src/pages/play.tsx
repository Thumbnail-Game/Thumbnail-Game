import { useState, useContext } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { NextSeo } from 'next-seo'

import { SignedInContext } from '../providers/AppProvider'
import { createUrqlClient } from '../util/index'
import {
  SelectGamemode,
  AdBanner,
  AdPopupVert1,
  AdPopupVert2,
} from '../components/elements/index'
import { Nav, Thumbnail } from '../components/modules/index'
import {
  Score,
  // MobileNotSupported,
  TestThumbnailsExists,
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
    <>
      <NextSeo
        title="The YouTube Thumbnail Game"
        description="Play with your friends and pick which thumbnail has more views!"
        canonical="https://www.thumbnailgame.com/"
        openGraph={{
          url: 'https://www.thumbnailgame.com/',
          title: 'The YouTube Thumbnail Game',
          description:
            'Play with your friends and pick which thumbnail has more views!',
          images: [
            {
              url: 'https://storage.googleapis.com/thumbnail-game/homepage.png',
              alt: 'Play Page Image Alt',
            },
          ],
          site_name: 'The YouTube Thumbnail Game',
        }}
        twitter={{
          handle: '@ThumbnailGame',
          cardType: 'summary_large_image',
        }}
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
            <AdPopupVert1 />
            <AdPopupVert2 />
          </>
        ) : (
          <>
            <SelectGamemode setGamemode={setGamemode} />
          </>
        )}
        {/* <TestThumbnailsExists /> */}
        <AdBanner />
      </div>
    </>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: false })(Play)
