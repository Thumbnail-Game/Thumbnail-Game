
import { useEffect, useMemo, useRef } from "react"
import * as Styled from './HomeVideoThumbnail.styled'

type Home3DProps = { video: any }

export const HomeVideoThumbnail: React.FC<Home3DProps> = ({ video }) => {

    return (
        <Styled.VideoWrapper>
            <Styled.VideoThumbnail>
                <Styled.Thumbnail src={video.thumbnail}></Styled.Thumbnail>
            </Styled.VideoThumbnail>
        </Styled.VideoWrapper>
    )
}