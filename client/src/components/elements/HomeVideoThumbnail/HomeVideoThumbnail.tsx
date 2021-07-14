import Image from 'next/image'

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
        <Image
          src={video.thumbnail}
          alt={`image-background-${video.title}`}
          width={320}
          height={180}
        />
      </Styled.VideoThumbnail>
    </Styled.VideoWrapper>
  )
}
