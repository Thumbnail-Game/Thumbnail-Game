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
  position: absolute;
  width: 100%;
  left: -100%;
  animation-name: ${SummaryAnimation};
  animation-duration: 1000ms;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`

export const CarouselContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 1700px;
`

export const VideoContainer = styled.div`
  display: flex;
  width: 1300px;
  justify-content: space-around;
  margin: auto;
`

export const VideoColumnContainer = styled.div`
  display: flex;
  overflow:hidden;
  flex-direction: column;
  width:604.8px;
`

export const VideoThumbnail = styled(Image)`
  border-radius: 10px;
`

export const VideoTitle = styled.div`
  margin-top: 12px;
  text-align:left;
  font-family:"Gothic Bold";
  font-size: 27px;
`

export const VideoViews = styled.div`
margin-top: 12px;
text-align:left;
font-family:"Gothic Bold";
font-size: 33px;
`

export const ViewSpan = styled.span`
margin-top: 12px;
text-align:left;
font-family:"Gothic Bold";
font-size: 28px;
font-weight:300;
`

export const RightArrow = styled.button`
  position: absolute;
  top: 0.7em;
  bottom: auto;
  padding: 0.4em;
  zindex: 2;
  top: 200px;
  right: 0px;
  backgroundcolor: Transparent;
  backgroundrepeat: no-repeat;
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
