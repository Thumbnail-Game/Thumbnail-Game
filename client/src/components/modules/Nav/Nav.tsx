import { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { ThemeContext } from '../../../providers/AppProvider'
import { SettingsPopup } from '../../modules/index'
import * as Styled from './Nav.styled'

interface NavProps {
  signedIn: boolean
}

export const Nav: React.FC<NavProps> = ({ signedIn }) => {
  const [showingSettings, setShowingSettings] = useState<boolean>(false)

  const { themeMode } = useContext(ThemeContext)

  const router = useRouter()

  return (
    <Styled.Nav>
      <Styled.Flex>
        <Styled.LogoContainer>
          <Styled.Logo
            src={`/images/thumbnail-${themeMode}.png`}
            width={187.2}
            height={53.456}
            onClick={() => router.push('/')}
          />
        </Styled.LogoContainer>
        <Styled.SettingsPopUpRow>
          <Styled.SettingsContainer>
            <Styled.SettingsIconWrapper
              onClick={() => setShowingSettings((oldSetting) => !oldSetting)}
            >
              <Styled.SettingsIcon
                fontSize={27}
                color={themeMode === 'light' ? 'grey' : 'white'}
              />
              <Styled.SettingsHover />
            </Styled.SettingsIconWrapper>
            <Styled.SignInUp onClick={() => router.push('login')}>
              Log In
              <Styled.SignInUpHover />
            </Styled.SignInUp>
            <Styled.SignInUp
              style={{ color: 'white' }}
              onClick={() => router.push('register')}
            >
              Sign Up
              <Styled.SignInUpHover2 />
            </Styled.SignInUp>
          </Styled.SettingsContainer>
          {showingSettings && <SettingsPopup />}
        </Styled.SettingsPopUpRow>
      </Styled.Flex>
      <Styled.Divider />
    </Styled.Nav>
  )
}
