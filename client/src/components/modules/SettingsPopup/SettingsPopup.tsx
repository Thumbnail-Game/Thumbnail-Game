import { useContext, useState } from 'react'
import { MdDragHandle } from 'react-icons/md'

import { ThemeToggle } from '../../elements/index'
import * as Styled from './SettingsPopup.styled'

interface SettingsPopupProps {
  toggleShowingSettings: () => void
}

export const SettingsPopup: React.FC<SettingsPopupProps> = ({ toggleShowingSettings }) => {
  return (
    <>
      <Styled.TransparentBackground onClick={toggleShowingSettings} />
      <Styled.TriangleIcon
        size={50}
      />
      <Styled.SettingsContainer>
        <ThemeToggle />
        <Styled.ThemeLabel>Dark Mode</Styled.ThemeLabel>
      </Styled.SettingsContainer>
    </>
  )
}
