import React, { useEffect, createContext, useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '../styles/index'
import { auth } from '../config/firebaseConfig'
import { EmailVerificationAlert } from '../components/elements/EmailVerificationAlert/EmailVerificationAlert'

export const ThemeContext = createContext({
  themeMode: 'dark',
  toggleTheme: () => {
    return
  },
})

export const SignedInContext = createContext({
  signedIn: false,
})

interface UserCallback {
  signedIn: boolean
  emailVerified: boolean
}

export const AppProvider: React.FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<string>('dark')
  const currentTheme = (theme as any)[themeMode]

  const [signedIn, setSignedIn] = useState<boolean>(false)
  const [showEmailVerificationMessage, setShowEmailVerificationMessage] =
    useState<boolean>(false)

  useEffect(() => {
    setThemeMode(localStorage.getItem('theme') || 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((response: UserCallback) => {
      if (response.signedIn) {
        if (!response.emailVerified) {
          setShowEmailVerificationMessage(true)

          auth.signOut()
          setSignedIn(false)
        } else {
          setSignedIn(true)
        }
      } else {
        setSignedIn(false)
      }
    })

    return () => unsubscribe()
  }, [])

  //  have to use callbacks, setting state within the listener does not work
  const onAuthStateChanged = (callback: any) => {
    return auth.onAuthStateChanged((user: any) => {
      if (user) {
        callback({ signedIn: true, emailVerified: user.emailVerified })
      } else {
        callback({ signedIn: false })
      }
    })
  }

  const setShowVerificationMessage = (verificationStatus: boolean) => {
    setShowEmailVerificationMessage(verificationStatus)
  }

  const toggleTheme = () => {
    setThemeMode((oldTheme) => {
      if (oldTheme === 'light') return 'dark'
      else return 'light'
    })
  }

  //  combine into one object for global ThemeContext state
  const themeValue = useMemo(() => ({ themeMode, toggleTheme }), [themeMode])
  const signedInValue = useMemo(() => ({ signedIn }), [signedIn])
  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={currentTheme}>
        <SignedInContext.Provider value={signedInValue}>
          <GlobalStyles />
          {children}
          <EmailVerificationAlert
            showEmailVerificationMessage={showEmailVerificationMessage}
            setShowEmailVerificationMessage={setShowVerificationMessage}
          />
        </SignedInContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
