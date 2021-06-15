import Head from 'next/head'
import { NextPage } from 'next'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { withUrqlClient } from 'next-urql'

import { AppProvider } from '../providers/AppProvider'
import { createUrqlClient } from '../util'
import { analytics } from '../config/firebaseConfig'

import './bodyStyle.css'

function MyApp({ Component, pageProps }: AppProps) {
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
        <title>The Youtube Thumbnail Game</title>
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
