import { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { ThemeContext } from '../../../providers/AppProvider'
import { NavMobile, SettingsPopup, Leaderboard } from '../../modules/index'
import { auth } from '../../../config/firebaseConfig'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import * as Styled from './Nav.styled'

interface NavProps {
  signedIn: boolean
}

export const Nav: React.FC<NavProps> = ({ signedIn }) => {
  const [showingSettings, setShowingSettings] = useState<boolean>(false)
  const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false)

  const { themeMode } = useContext(ThemeContext)

  const router = useRouter()

  const toggleShowSettings = () => {
    setShowingSettings((oldShowingSettings) => !oldShowingSettings)
  }

  const toggleLeaderboard = () => {
    setShowLeaderboard((oldLeaderboard) => !oldLeaderboard)
  }

  const supportedWidth = useMediaQuery('(min-width: 760px)')
  const lessThan370px = useMediaQuery('(max-width: 370px)')

  return (
    <>
      {showLeaderboard && <Leaderboard toggleLeaderboard={toggleLeaderboard} />}
      <Styled.Nav>
        <Styled.Flex>
          {(router.pathname !== '/play' || !lessThan370px) && (
            <Styled.LogoContainer>
              <Styled.Logo
                src={`/images/thumbnail-${themeMode}.png`}
                width={187.2}
                height={53.456}
                alt={'nav-logo'}
                onClick={() => router.push('/')}
              />
            </Styled.LogoContainer>
          )}
          {supportedWidth ? (
            <Styled.SettingsPopUpRow>
              <Styled.NavWrapper>
                <Styled.NavIconWrapper
                  style={{ marginRight: '5px' }}
                  onClick={() =>
                    setShowLeaderboard((oldLeaderboard) => !oldLeaderboard)
                  }
                >
                  <Styled.SearchIcon
                    fontSize={27}
                    color={themeMode === 'light' ? '#282828' : 'white'}
                  />
                  {themeMode === 'light' ? (
                    <Styled.SearchHover />
                  ) : (
                    <Styled.SearchHoverDark />
                  )}
                </Styled.NavIconWrapper>
                <Styled.NavIconWrapper
                  onClick={() =>
                    setShowingSettings((oldSetting) => !oldSetting)
                  }
                >
                  <Styled.SettingsIcon
                    fontSize={27}
                    color={themeMode === 'light' ? '#282828' : 'white'}
                  />
                  {themeMode === 'light' ? (
                    <Styled.SettingsHover />
                  ) : (
                    <Styled.SettingsHoverDark />
                  )}
                </Styled.NavIconWrapper>
                {!signedIn ? (
                  <>
                    <Styled.SignInUp
                      onClick={() =>
                        router.replace('/login', undefined, { shallow: true })
                      }
                    >
                      Log In
                      {themeMode === 'light' ? (
                        <Styled.SignInUpHover />
                      ) : (
                        <Styled.SignInUpHoverDark />
                      )}
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
                      ></Styled.PersonIcon>
                      {themeMode === 'light' ? (
                        <Styled.SettingsHover />
                      ) : (
                        <Styled.SettingsHoverDark />
                      )}
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
                      <Styled.SignInUpHover />
                    </Styled.SignOutButton>
                  </>
                )}
              </Styled.NavWrapper>
              {showingSettings && (
                <SettingsPopup toggleShowingSettings={toggleShowSettings} />
              )}
            </Styled.SettingsPopUpRow>
          ) : (
            <>
              <NavMobile
                showingSettingsState={{
                  showingSettings: showingSettings,
                  setShowSettings: setShowingSettings,
                }}
                showLeaderboardState={{
                  showingLeaderboard: showLeaderboard,
                  setShowLeaderboard: setShowLeaderboard,
                }}
                signedIn={signedIn}
              />
            </>
          )}
        </Styled.Flex>
        <Styled.Divider />
      </Styled.Nav>
    </>
  )
}
