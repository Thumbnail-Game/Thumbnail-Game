import * as Styled from './HomeVideoThumbnail.styled'

interface Home3DProps {
  video: {
    title: string
    thumbnail: string
  }
}

export const HomeVideoThumbnail: React.FC<Home3DProps> = ({ video }) => {
  return (
    <Styled.VideoWrapper>
      <Styled.VideoThumbnail>
        <Styled.Thumbnail
          src={video.thumbnail}
          alt={`image-background-${video.title}`}
        />
      </Styled.VideoThumbnail>
    </Styled.VideoWrapper>
  )
}
