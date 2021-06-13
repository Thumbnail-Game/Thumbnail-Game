import styled from 'styled-components'
import { keyframes } from 'styled-components'

const VideoHover = keyframes`
    0%{
        transform:scale(1);
    }
    100%{
        transform:scale(1.1);
    }
`

export const VideoWrapper = styled.div`
    width: 330px;
    height:190px;
    background-color:#282828;
    position:relative;
    z-index:0;

    &:hover{
        animation-name:${VideoHover};
        animation-duration:300ms;
        animation-fill-mode:forwards;
        border-radius: 5px;
        z-index:1;
    }
`

export const VideoThumbnail = styled.div`
    width: 320px;
    height:180px;
    background-color:transparent;
    position:absolute;
    border-radius:5px;
    margin:auto;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:1;
    
`
export const Thumbnail = styled.img`
    width: 100%;
    height:100%;
    border-radius:5px;
    z-index:0;
`
