import { ThemeToggle } from '../../elements/index'
import * as Styled from './SettingsPopup.styled'

export const SettingsPopup: React.FC = () => {
  return (
    <Styled.SettingsContainer>
      <ThemeToggle />
    </Styled.SettingsContainer>
  )
}
