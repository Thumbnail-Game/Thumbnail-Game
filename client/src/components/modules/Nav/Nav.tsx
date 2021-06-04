import { useContext } from 'react'
import { useRouter } from 'next/router'
import { MdSettings } from 'react-icons/md'

import * as Styled from './Nav.styled'
import { ThemeContext } from '../../../providers/AppProvider'

export const Nav: React.FC = () => {
  const { themeMode } = useContext(ThemeContext)

  const router = useRouter();

  return (
    <Styled.Nav>
      <Styled.Flex>
        <Styled.Logo
          src={`/images/thumbnail-${themeMode}.png`}
          width={187.2}
          height={53.456}
          onClick={() => router.push('/')}
        ></Styled.Logo>
        <Styled.SettingsContainer>
          <Styled.SettingsIconWrapper>
            <Styled.SettingsIcon
              fontSize={27}
              color={themeMode === 'light' ? 'grey' : 'white'}
            >
            </Styled.SettingsIcon>
            <Styled.SettingsHover></Styled.SettingsHover>
          </Styled.SettingsIconWrapper>
          <Styled.SignIn>Sign In
              <Styled.SignInHover></Styled.SignInHover>
          </Styled.SignIn>
        </Styled.SettingsContainer>
      </Styled.Flex>
      <Styled.Divider></Styled.Divider>
    </Styled.Nav>
  )
}
//  MdSettings


