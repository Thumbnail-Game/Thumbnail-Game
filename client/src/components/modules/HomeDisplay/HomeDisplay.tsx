import Skeleton from '@material-ui/lab/Skeleton'

import { HomeVideoThumbnail, TotalGamesHeading } from '../../elements/index'
import { useGetVideosQuery } from '../../../generated/graphql'
import * as Styled from './HomeDisplay.styled'

interface HomeDisplayProps {
  showLogo: boolean
}

export const HomeDisplay: React.FC<HomeDisplayProps> = ({ showLogo }) => {
  const [videos] = useGetVideosQuery({
    variables: {
      numVideos: 100,
    },
  })
  const videoData = videos && videos.data

  return (
    <>
      <Styled.HomeWrapper>
        {showLogo && (
          <Styled.LogoContainer>
            <Styled.Logo
              src={'/images/thumbnail-dark.png'}
              alt={'home-display-logo'}
            />
          </Styled.LogoContainer>
        )}
        <Styled.Grid>
          {false ||
            (!videos.fetching &&
              videoData &&
              videoData.getVideos?.map((video, i) => (
                <HomeVideoThumbnail key={i} video={video} />
              )))}

          {true && (
            <Skeleton
              style={{
                borderRadius: '5',
              }}
              variant="rect"
              width={320}
              height={180}
              animation="wave"
            />
          )}
        </Styled.Grid>
      </Styled.HomeWrapper>
      {/* <TotalGamesHeading /> */}
    </>
  )
}
