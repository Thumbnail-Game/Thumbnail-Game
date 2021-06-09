import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { Snackbar } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

import { auth } from '../config/firebaseConfig'
import { Thumbnail } from '../components/modules/index'
import { Score } from '../components/elements/index'
import { Nav } from '../components/modules/index'
import { createUrqlClient } from '../util/index'

const Play: NextPage = () => {
  const [showEmailVerificationMessage, setShowEmailVerificationMessage] =
    useState<boolean>(false)
  const [signedIn, setSignedIn] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  console.log(showEmailVerificationMessage)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((response: any) => {
      console.log(response)
      if (response.signedIn) {
        if (!response.emailVerfied) {
          setShowEmailVerificationMessage(true)
          auth.signOut()
        }
        setSignedIn(true)
      } else {
        setSignedIn(false)
      }
    })
    // if (user) {
    //   if (!user.emailVerified) {
    //     console.log('r')
    //     setShowEmailVerificationMessage(true)
    //     auth.signOut()
    //   }
    //   setSignedIn(true)
    // } else setSignedIn(false)

    return () => unsubscribe()
  }, [])

  //  have to use callbacks, setting state within the listener does not work
  const onAuthStateChanged = (callback: any) => {
    return auth.onAuthStateChanged((user: any) => {
      if (user) {
        callback({ signedIn: true, emailVerfied: user.emailVerified })
      } else {
        callback({ signedIn: false })
      }
    })
  }

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
      <Snackbar
        open={showEmailVerificationMessage}
        onClose={() => setShowEmailVerificationMessage(false)}
        autoHideDuration={6000}
      >
        <Alert severity="success">
          <AlertTitle>Your account has been created!</AlertTitle>
          <strong>Please verify your email!</strong>
        </Alert>
      </Snackbar>
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
