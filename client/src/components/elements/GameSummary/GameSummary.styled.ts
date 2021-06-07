import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

export const SummaryAnimation = keyframes`
    0% {
        width:100%;
        left:-100%;
        position:absolute;
    }
    100% {
       position:absolute;
       left:0;
       width:100%;
    }
`

export const GameSummaryWrapper = styled.div`
   animation-name:${SummaryAnimation};
   animation-duration:1000ms;
   width:100%; 
`

export const CarouselContainer = styled.div`
    margin:auto;
    margin-top:100px;
    width:1700px;
`

export const VideoContainer = styled.div`
    display: flex;
    width: 1500px;
    justify-content: center;
    align-items: center;
    margin:auto;
    height: 100%;
`

export const VideoThumbnail = styled.img`
    margin: 0px 30px 0px 30px;
    border-radius:10px;
`

export const RightArrow = styled.button`
    position: absolute;
    top: .7em;  
    bottom: auto;
    padding: .4em;
    zIndex: 2;
    top: 200px;
    right: 0px;
    backgroundColor: Transparent;
    backgroundRepeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`

export const LeftArrow = styled.button`
    position: absolute;
    top: .7em;
    bottom: auto;
    padding: .4em;
    zIndex: 2;
    top: 200px;
    left: 0px;
    backgroundColor: Transparent:
    backgroundRepeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`
