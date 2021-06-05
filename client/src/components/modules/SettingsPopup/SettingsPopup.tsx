import { useContext } from 'react'

import { ThemeContext } from '../../../providers/AppProvider'
import { ThemeToggle } from '../../elements/index'
import * as Styled from './SettingsPopup.styled'

export const SettingsPopup: React.FC = () => {
  const { themeMode } = useContext(ThemeContext)

  return (
    <>
      <Styled.TriangleIcon
        size={50}
        color={themeMode === 'light' ? '#3d3d3d' : '#3d3d3d'}
      />
      <Styled.SettingsContainer>
        <ThemeToggle />
      </Styled.SettingsContainer>
    </>
  )
}
