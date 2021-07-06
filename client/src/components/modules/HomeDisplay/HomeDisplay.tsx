import * as Styled from './HomeDisplay.styled'
import { HomeVideoThumbnail, TotalGamesHeading } from '../../elements/index'
import { useGetVideosQuery } from '../../../generated/graphql'

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
      <Styled.Parent>
        {showLogo && (
          <Styled.Logo
            src={'/images/thumbnail-dark.png'}
            alt={'home-display-logo'}
          />
        )}
        <Styled.Grid>
          {videoData &&
            videoData.getVideos?.map((video, i: number) => (
              <HomeVideoThumbnail key={i} video={video} />
            ))}
        </Styled.Grid>
      </Styled.Parent>
      {/* <TotalGamesHeading /> */}
    </>
  )
}
