import { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { ThemeContext } from '../../../providers/AppProvider'
import { SettingsPopup, Leaderboard } from '../../modules/index'
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

  return (
    <>
      {showLeaderboard && <Leaderboard />}
      <Styled.Nav>
        <Styled.Flex>
          <Styled.LogoContainer>
            <Styled.Logo
              src={`/images/thumbnail-${themeMode}.png`}
              width={187.2}
              height={53.456}
              alt={'nav-logo'}
              onClick={() => router.push('/')}
            />
          </Styled.LogoContainer>
          {supportedWidth ? (
            <Styled.SettingsPopUpRow>
              <Styled.NavWrapper>
                <Styled.NavIconWrapper
                  onClick={() =>
                    setShowLeaderboard((oldLeaderboard) => !oldLeaderboard)
                  }
                >
                  <Styled.SearchIcon
                    fontSize={27}
                    color={themeMode === 'light' ? '#282828' : 'white'}
                  />
                  <Styled.SearchHover />
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
                  <Styled.SettingsHover />
                </Styled.NavIconWrapper>
                {!signedIn ? (
                  <>
                    <Styled.SignInUp
                      onClick={() =>
                        router.replace('/login', undefined, { shallow: true })
                      }
                    >
                      Log In
                      <Styled.SignInUpHover />
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
                      <Styled.SettingsHover />
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
            <Styled.MenuIcon size={60} />
          )}
        </Styled.Flex>
        <Styled.Divider />
      </Styled.Nav>
    </>
  )
}
