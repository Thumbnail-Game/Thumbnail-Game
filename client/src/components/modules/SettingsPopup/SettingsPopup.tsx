import { ThemeToggle } from '../../elements/index'
import * as Styled from './SettingsPopup.styled'

export const SettingsPopup: React.FC = () => {
  return (
    <>
      <Styled.TriangleIcon size={50} />
      <Styled.SettingsContainer>
        <ThemeToggle />
        <Styled.ThemeLabel>Dark Mode</Styled.ThemeLabel>
      </Styled.SettingsContainer>
    </>
  )
}
