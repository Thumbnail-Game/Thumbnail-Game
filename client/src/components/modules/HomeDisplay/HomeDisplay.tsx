
import { useEffect, useMemo, useRef } from "react"
import * as Styled from './HomeDisplay.styled'
import { HomeVideoThumbnail } from '../../elements/index'

type Home3DProps = { videos: any }

export const HomeDisplay: React.FC<Home3DProps> = ({ videos }) => {
    return (
        <Styled.Parent>
            {/* <Styled.Line /> */}
            <Styled.Logo src={"/images/thumbnail-dark.png"} />
            <Styled.Grid>
                {
                    videos && videos.getVideos.map((video: any) => (
                        <HomeVideoThumbnail video={video}></HomeVideoThumbnail>
                    ))
                }
            </Styled.Grid>
        </Styled.Parent>
    )
}