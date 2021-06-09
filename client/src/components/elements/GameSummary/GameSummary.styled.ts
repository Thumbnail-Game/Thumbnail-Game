import Image from 'next/image'
import { Button } from '@material-ui/core'
import styled, { keyframes } from 'styled-components'
import { MdCancel } from 'react-icons/md'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa'

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
  animation-delay: 1s;
  animation-fill-mode: forwards;
`

export const GameSummaryTitle = styled.div`
  font-family:"Gothic Bold";
  font-size: 45px;
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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none;
`

export const VideoColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:604.8px;
  padding-top:10px;
`

export const VideoHover = keyframes`
    0% {
      transform:scale(1);
    }
    60% {
      transform:scale(1.025);
    }
    100% {
      transform:scale(1.02);
      box-shadow:5px 5px 10px #121212;
    }
`

export const VideoThumbnail = styled(Image)`
  border-radius: 10px;
  
`

export const Videos = styled.div`
    border-radius:10px;
    height:340.2px;
    position:relative;
  &:hover{
    animation-name:${VideoHover};
    animation-duration:300ms;
    animation-fill-mode: forwards;  
  }
`

export const VideoTitle = styled.div`
  margin-top: 12px;
  text-align:left;
  font-family:"Gothic Bold";
  font-size: 27px;
  height: 66px;
  overflow:hidden;
  
`

export const VideoViews = styled.div`
  margin-top: 10px;
  text-align:left;
  font-family:"Gothic Bold";
  font-size: 33px;
`

export const ViewSpan = styled.span`
margin-top: 12px;
text-align:left;
font-family:"Gothic Bold";
font-size: 28px;
`

export const PlayButtonHover = keyframes`
    0% {
      background-color:transparent;
      color:white;
      transform:scale(1);
    }
    100% {
      background-color:white;
      color:black;
      transform: scale(1.07);
    }
`
export const PlayButtonOut = keyframes`
    100% {
      background-color:transparent;
      color:white;
      transform:scale(1);
    }
    0% {
      background-color:white;
      color:black;
      transform: scale(1.07);
    }
`

export const PlayAgainButton = styled.button`
    position: relative;
    outline:none;
    width: 200px;
    height:60px;
    border-radius: 10px;
    border: 3.5px solid white;
    background-color:transparent;
    color:white;
    font-size:25px;
    font-family:"Gothic Bold";
    padding-bottom: 4px;
    animation-name:${PlayButtonOut};
    animation-duration: 200ms;
    animation-fill-mode: forwards;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
    &:hover{
      animation-name: ${PlayButtonHover};
      animation-duration: 300ms;
      animation-iteration-count: 1;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    margin:auto;
    margin-top: 50px;
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

export const IconHover = keyframes`
    0% {
      background-color:transparent;
    }
    100% {
      background-color:#484848;
      opacity:0.7;
    }
`

export const IconHoverDiv = styled.div`
    width:83px;
    height:83px;
    border-radius:50%;
    background-color:transparent;
    &:hover{
      animation-name:${IconHover};
      animation-duration: 500ms;
      animation-fill-mode: forwards;
    }
`

export const LoseIcon = styled(MdCancel)`
    color: #FA6565;
    position:absolute;
    z-index: 5;
    top:80px;
`

export const WinIcon = styled(IoIosCheckmarkCircle)`
    color: #6EDBA3;
    position:absolute;
    z-index: 5;
    top:80px;
`

export const PlayIcon = styled(FaPlay)`
    color: white;
    position:absolute;
    margin:auto;
    text-align:center;
    top:0;
    bottom:0;
    right:0;
    left:0;
    filter: drop-shadow(5px 5px 10px #121212);
`

export const IconDiv = styled.div`
    width:110px;
    height:110px;
    border-radius:50%;
    position:absolute;
    background-color:#282828;
    z-index:4;
    top:105px;
`
