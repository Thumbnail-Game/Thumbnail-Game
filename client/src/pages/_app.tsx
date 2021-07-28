import { useEffect } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import { AppProvider } from '../providers/AppProvider'
import { analytics } from '../config/firebaseConfig'

import './bodyStyle.css'
import { useRouter } from 'next/router'
import { GoTag } from 'react-icons/go'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {

    if (process.env.NODE_ENV === 'production') {
      const logEvent = () => {
        analytics().logEvent('screen_view')
      }

      logEvent()
    }

    // Remove the server-side injected CSS.
    const jssStyles: Element | null = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>The YouTube Thumbnail Game</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
