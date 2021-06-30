import { useState, useContext } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import { useRouter } from 'next/router'

import { auth } from '../../../config/firebaseConfig'
import { SettingsPopup } from '../../modules/index'
import { ThemeContext } from '../../../providers/AppProvider'
import * as Styled from './NavMobile.styled'

interface NavMobileProps {
  showingSettingsState: {
    showingSettings: boolean
    setShowSettings: Dispatch<SetStateAction<boolean>>
  }
  showLeaderboardState: {
    showingLeaderboard: boolean
    setShowLeaderboard: Dispatch<SetStateAction<boolean>>
  }
  signedIn: boolean
}

export const NavMobile: React.FC<NavMobileProps> = ({
  showingSettingsState,
  showLeaderboardState,
  signedIn,
}) => {
  //  material ui drawer state
  const [drawerState, setDrawerState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const { themeMode } = useContext(ThemeContext)

  const router = useRouter()

  const toggleDrawer = (side: string, open: boolean) => (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerState({ ...drawerState, [side]: open })
  }

  const toggleShowSettings = () => {
    showingSettingsState.setShowSettings((oldSetting) => !oldSetting)
  }

  return (
    <>
      <Styled.MenuIcon size={60} onClick={toggleDrawer('left', true)} />
      <SwipeableDrawer
        open={drawerState.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <Styled.DrawerWrapper>
          <Styled.NavIconWrapper onClick={() => router.push('/play')}>
            <Styled.PlayIcon
              fontSize={27}
              color={themeMode === 'light' ? '#282828' : 'white'}
            />
          </Styled.NavIconWrapper>
          <Styled.NavIconWrapper
            onClick={() => {
              setDrawerState({
                top: false,
                left: false,
                bottom: false,
                right: false,
              })
              showLeaderboardState.setShowLeaderboard(
                (oldLeaderboard) => !oldLeaderboard
              )
            }}
          >
            <Styled.LeaderboardIcon
              fontSize={36}
              color={themeMode === 'light' ? '#282828' : 'white'}
            />
          </Styled.NavIconWrapper>
          {!signedIn ? (
            <>
              <Styled.SignInUp
                onClick={() =>
                  router.replace('/login', undefined, { shallow: true })
                }
              >
                Log In
              </Styled.SignInUp>
              <Styled.SignInUp
                style={{ color: 'white' }}
                onClick={() =>
                  router.replace('/register', undefined, {
                    shallow: true,
                  })
                }
              >
                Sign Up
                <Styled.SignInUpHover2 />
              </Styled.SignInUp>
            </>
          ) : (
            <>
              <Styled.IconContainer>
                <Styled.PersonIcon
                  size={30}
                  onClick={() =>
                    router.replace(
                      `/user/${auth.currentUser?.displayName}`,
                      undefined,
                      { shallow: true }
                    )
                  }
                />
              </Styled.IconContainer>
              <Styled.SignOutButton
                style={{ zIndex: 2 }}
                onClick={() => {
                  auth.signOut().catch((error) => {
                    console.log(error)
                  })
                }}
              >
                Sign Out
              </Styled.SignOutButton>
            </>
          )}
        </Styled.DrawerWrapper>
      </SwipeableDrawer>
      {showingSettingsState.showingSettings && (
        <SettingsPopup toggleShowingSettings={toggleShowSettings} />
      )}
    </>
  )
}
