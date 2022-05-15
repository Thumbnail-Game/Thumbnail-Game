import React, { useEffect, createContext, useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '../styles/index'
import { auth } from '../config/firebaseConfig'
import { EmailVerificationAlert } from '../components/elements/EmailVerificationAlert/EmailVerificationAlert'

export const SoundContext = createContext({
  sound: 'false',
  toggleSound: () => {
    return
  },
})

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

  const [sound, setSound] = useState<string>('false')

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
    setSound(localStorage.getItem('sound') || 'false')
  }, [])

  useEffect(() => {
    localStorage.setItem('sound', sound)
  }, [sound])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((response: UserCallback) => {
      if (response.signedIn) {
        setSignedIn(true)
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

  const toggleSound = () => {
    setSound((oldSound) => {
      if (oldSound === 'true') return 'false'
      else return 'true'
    })
  }

  //  combine into one object for global ThemeContext state
  const themeValue = useMemo(() => ({ themeMode, toggleTheme }), [themeMode])
  const soundValue = useMemo(() => ({ sound, toggleSound }), [sound])
  const signedInValue = useMemo(() => ({ signedIn }), [signedIn])
  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={currentTheme}>
        <SoundContext.Provider value={soundValue}>
          <SignedInContext.Provider value={signedInValue}>
            <GlobalStyles />
            {children}
            <EmailVerificationAlert
              showEmailVerificationMessage={showEmailVerificationMessage}
              setShowEmailVerificationMessage={setShowVerificationMessage}
            />
          </SignedInContext.Provider>
        </SoundContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
