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
          <Styled.VersionTitle>Version 1.2</Styled.VersionTitle>
          <Styled.VersionDate>May 20th, 2022</Styled.VersionDate>
          <Styled.VersionDescription>
            Added a lot more videos to the database. Added daily gamemode and
            improved percentile loading.
          </Styled.VersionDescription>
          <Styled.VersionTitle>Version 1.1</Styled.VersionTitle>
          <Styled.VersionDate>May 13th, 2022</Styled.VersionDate>
          <Styled.VersionDescription>
            Reset the leaderboard due to a major increase in the number of
            players causing it to break. This will not happen again. Also, fixed
            a bug with empty thumbnails being shown on the play page. Huge
            shoutout to{' '}
            <a
              href="https://www.tiktok.com/@setupspawn"
              style={{
                color: 'inherit',
                textDecoration: 'underline',
                marginLeft: '5px',
              }}
              target="_blank"
            >
              setupspawn
            </a>{' '}
            for this
            <a
              style={{
                color: 'inherit',
                textDecoration: 'underline',
                marginLeft: '5px',
              }}
              href="https://www.tiktok.com/@setupspawn/video/7095756667643612458"
              target="_blank"
            >
              TikTok video!
            </a>
          </Styled.VersionDescription>
          <Styled.VersionTitle>Version 1.0</Styled.VersionTitle>
          <Styled.VersionDate>July 12th, 2021</Styled.VersionDate>
          <Styled.VersionDescription>
            Inital staging version, still have a lot of work to complete, but it
            is playable now. Shoutout to Vov for being the first person to join
            the discord.
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
