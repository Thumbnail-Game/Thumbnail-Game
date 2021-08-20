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
              width={1014}
              height={290}
              src={'/images/thumbnail-dark.png'}
              alt={'home-display-logo'}
            />
          </Styled.LogoContainer>
        )}
        <Styled.Grid>
          {videoData &&
            videoData?.getVideos?.map((video, i) => (
              <HomeVideoThumbnail key={i} video={video} />
            ))}
          {videos.fetching && (
            <Skeleton
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              variant="rect"
              width="100%"
              height="100vh"
              animation="wave"
            />
          )}
        </Styled.Grid>
      </Styled.HomeWrapper>
      {/* <TotalGamesHeading /> */}
    </>
  )
}
