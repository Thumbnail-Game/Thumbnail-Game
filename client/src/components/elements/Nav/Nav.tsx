import { useContext } from 'react'
import * as Styled from './Nav.styled'
import { useRouter } from 'next/router'
import { ThemeContext } from '../../../providers/AppProvider'

export const Nav: React.FC = () => {
  const { themeMode } = useContext(ThemeContext)

  const router = useRouter();

  return (
    <>
      <Styled.Nav>
        <Styled.Flex>
          <Styled.Logo
            src={`/images/thumbnail-${themeMode}.png`}
            width={180}
            height={51.4}
            onClick={() => router.push('/')}
          ></Styled.Logo>
        </Styled.Flex>
        <Styled.Divider></Styled.Divider>
      </Styled.Nav>
    </>
  )
}


