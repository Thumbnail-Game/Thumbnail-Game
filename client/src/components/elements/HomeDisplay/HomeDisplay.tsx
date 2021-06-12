import { useEffect, useMemo, useRef } from "react"
import * as Styled from './HomeDisplay.styled'

type Home3DProps = { videos: any }
type titleProps = { name: string; position: any; }

export const HomeDisplay: React.FC<Home3DProps> = ({ videos }) => {
    return (
        <Styled.Parent>
            <Styled.Line />
            <Styled.Logo src={"/images/thumbnail-dark.png"} />
        </Styled.Parent>
    )
}