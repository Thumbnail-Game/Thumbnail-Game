import {
  PopupBackground,
  PopupTransparentBackground,
} from '../../../styles/constantStyles'
import * as Styled from './VersionLog.styled'

interface VersionLogProps {
  toggleShowingVersionLog: () => void
}

export const VersionLog: React.FC<VersionLogProps> = ({
  toggleShowingVersionLog,
}) => {
  return (
    <>
      <PopupBackground>Version</PopupBackground>
      <PopupTransparentBackground onClick={toggleShowingVersionLog} />
    </>
  )
}
