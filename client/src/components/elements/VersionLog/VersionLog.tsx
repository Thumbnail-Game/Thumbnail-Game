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
      <PopupBackground>
        <Styled.VersionTextContainer>
          <Styled.VersionTitle>Version 1.0</Styled.VersionTitle>
          <Styled.VersionDescription>
            Inital staging version, still have a lot of work to complete, but it
            is playable now.
          </Styled.VersionDescription>
          {/* <Styled.VersionListHeader>TODO</Styled.VersionListHeader>
          <Styled.VersionList>
            <li>Fix jittery animations and initial page load shifts</li>
          </Styled.VersionList> */}
        </Styled.VersionTextContainer>
      </PopupBackground>
      <PopupTransparentBackground onClick={toggleShowingVersionLog} />
    </>
  )
}
