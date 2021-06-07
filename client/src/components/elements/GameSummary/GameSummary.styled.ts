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
  width: 1500px;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
`

export const VideoColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoThumbnail = styled.img`
  margin: 0px 30px 0px 30px;
  border-radius: 10px;
  width: 50%;
`

export const VideoTitle = styled.div`
  font-size: 20px;
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
