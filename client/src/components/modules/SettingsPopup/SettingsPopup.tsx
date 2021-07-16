import { useContext } from 'react'

import { SignedInContext } from '../../../providers/AppProvider'
import { ThemeToggle, SoundToggle } from '../../elements/index'
import * as Styled from './SettingsPopup.styled'

interface SettingsPopupProps {
  toggleShowingSettings: () => void
}

export const SettingsPopup: React.FC<SettingsPopupProps> = ({
  toggleShowingSettings,
}) => {
  const { signedIn } = useContext(SignedInContext)

  return (
    <>
      <Styled.TransparentBackground onClick={toggleShowingSettings} />
      <Styled.TriangleIcon size={50} signedIn={signedIn} />
      <Styled.SettingsContainer signedIn={signedIn}>
        <Styled.ToggleContainer>
          <ThemeToggle />
          <Styled.ThemeLabel>Dark Mode</Styled.ThemeLabel>
        </Styled.ToggleContainer>
        <Styled.ToggleContainer>
          <SoundToggle />
          <Styled.ThemeLabel>Sound On</Styled.ThemeLabel>
        </Styled.ToggleContainer>
      </Styled.SettingsContainer>
    </>
  )
}
