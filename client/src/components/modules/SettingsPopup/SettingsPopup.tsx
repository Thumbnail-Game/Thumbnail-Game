<<<<<<< HEAD
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
=======
import { ThemeToggle } from '../../elements/index'
import * as Styled from './SettingsPopup.styled'

export const SettingsPopup: React.FC = () => {
  return (
    <>
      <Styled.TriangleIcon size={50} />
>>>>>>> c714c9bf4684f12f565ec8f6a36da87d00b8381a
      <Styled.SettingsContainer>
        <ThemeToggle />
        <Styled.ThemeLabel>Dark Mode</Styled.ThemeLabel>
      </Styled.SettingsContainer>
    </>
  )
}
