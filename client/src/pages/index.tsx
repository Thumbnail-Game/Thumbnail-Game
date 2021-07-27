import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import styled, { keyframes } from 'styled-components'

import { createUrqlClient } from '../util/index'
import { HomeDisplay } from '../components/modules/index'

const Home: NextPage = () => {
  const router = useRouter()

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
      <HomeDisplay showLogo={true} />
      <PlayButton onClick={() => router.push('/play')}>Play</PlayButton>
    </>
  )
}

export const PlayButtonAnimation = keyframes`
  0% {
    transform:scale(0.8); 
  }
  70% {
    transform:scale(1.1)
  }
  100%{
    transform:scale(1.06);
  }
`

export const PlayButtonAnimationOut = keyframes`
  100% {
    transform:scale(0.8); 
  }
  0%{
    transform:scale(1.06);
  }
`

export const PlayButton = styled.div`
  position: absolute;
  bottom: 15%;
  margin: auto;
  font-size: 45px;
  font-family: 'Gothic Bold';
  text-align: center;
  left: 0;
  right: 0;
  transform: scale(0.8);
  z-index: 1;
  border-radius: 13px;
  box-shadow: 8px 8px 20px black;
  width: 300px;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: red;
  cursor: pointer;
  animation-name: ${PlayButtonAnimationOut};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  color: white;

  &:hover {
    animation-name: ${PlayButtonAnimation};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
`

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Home)
