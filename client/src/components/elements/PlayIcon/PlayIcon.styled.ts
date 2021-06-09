import { FaPlay } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

export const PlayIconAnimation = keyframes`
    0% {
      color:transparent;
    }
    100% {
      color: white;
    }
`

export const PlayIcon = styled(FaPlay)`
    color:transparent;
    position:absolute;
    margin:auto;
    text-align:center;
    top:0;
    bottom:0;
    right:0;
    left:0;
    filter: drop-shadow(5px 5px 10px #121212);
    z-index:1;
`