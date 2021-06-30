import Image from 'next/image'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { MdCancel, MdTimerOff } from 'react-icons/md'
import styled, { keyframes } from 'styled-components'

import { PlayIcon, PlayIconAnimation } from '../PlayIcon/PlayIcon.styled'

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
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 770px) {
    zoom: 0.89;
  }

  @media (max-width: 700px) {
    zoom: 1;
  }
`

export const GameSummaryTitle = styled.div`
  font-family: 'Gothic Bold';
  font-size: 45px;
`

export const CarouselContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 1700px;

  @media (max-width: 760px) {
    width: 100%;
  }
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

  @media (max-width: 760px) {
    display: block;
    width: 604.8px;
    margin: auto;
  }
`

export const VideoColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 604.8px;
  padding-top: 10px;
`

export const Dots = styled.p`
  margin-top: 520px;

  @media (max-width: 760px) {
    margin-top: 70px;
  }
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
  border-radius: 10px;
  height: 340.2px;
  position: relative;

  &:hover {
    animation-name: ${VideoHover};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }

  &:hover ${PlayIcon} {
    color: white;
    animation-name: ${PlayIconAnimation};
    animation-duration: 500ms;
    animation-fill-mode: fowards;
  }
`

export const VideoTitle = styled.div`
  margin-top: 12px;
  text-align: left;
  font-family: 'Gothic Bold';
  font-size: 27px;
  height: 66px;
  overflow: hidden;
`

export const VideoViews = styled.div`
  margin-top: 10px;
  text-align: left;
  font-family: 'Gothic Bold';
  font-size: 33px;
`

export const ViewSpan = styled.span`
  margin-top: 12px;
  text-align: left;
  font-family: 'Gothic Bold';
  font-size: 28px;
`

export const PlayButtonHoverOut = keyframes`
    0%{
      background-color:transparent;
      color: white;
      transform:scale(1);
    } 
    100%{
      background-color: white;
      color: #282828;
      transform:scale(1.07);
    }
`
export const DarkPlayButtonOut = keyframes`
    0%{
      background-color:transparent;
      color: white;
      transform:scale(1);
    } 
    100%{
      background-color: white;
      color: #282828;
      transform:scale(1.07);
    }
`

export const LightPlayButtonOut = keyframes`
    0%{
      background-color:transparent;
      color: #282828;
      transform:scale(1);
    } 

    100%{
      background-color:#282828;
      color: white;
      transform:scale(1.07);
    }
`

export const PlayAgainButton = styled.button`
  position: relative;
  outline: none;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  border: 3.5px solid ${(props) => props.theme.primaryText};
  background-color: transparent;
  color: ${(props) => props.theme.primaryText};
  font-size: 25px;
  font-family: 'Gothic Bold';
  padding-bottom: 4px;
  margin-bottom: -30px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  &:hover {
    animation-name: ${(props) =>
      props.theme.theme === 'dark' ? DarkPlayButtonOut : LightPlayButtonOut};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 25px;

  @media (max-width: 760px) {
    margin-top: 25px;
    margin-bottom: 30px;
    transform: scale(1.2);
  }
`

export const RightButton = styled.button`
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 180px;
  right: 70px;
  z-index: 2;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  @media (max-width: 760px) {
    right: -10px;
  }
`

export const LeftButton = styled.button`
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 180px;
  left: 70px;
  z-index: 2;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  @media (max-width: 760px) {
    left: -10px;
  }
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
  width: 83px;
  height: 83px;
  border-radius: 50%;
  background-color: transparent;
  &:hover {
    animation-name: ${IconHover};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }

  @media (max-width: 770px) {
    background-color: transparent;

    &:hover {
      background-color: transparent;
      animation: none;
    }
  }
`

export const LoseIcon = styled(MdCancel)`
  color: #fa6565;
  position: absolute;
  z-index: 5;
  top: 60px;
  filter: drop-shadow(0px 0px 19px #222222);

  @media (max-width: 760px) {
    top: -10px;
    left: 0px;
    right: 610px;
    margin-left: auto;
    margin-right: auto;
    filter: none;
  }
`

export const WinIcon = styled(IoIosCheckmarkCircle)`
  color: #6edba3;
  position: absolute;
  z-index: 5;
  top: 60px;
  filter: drop-shadow(0px 0px 19px #222222);

  @media (max-width: 760px) {
    top: -10px;
    left: 0px;
    right: 610px;
    margin-left: auto;
    margin-right: auto;
    filter: none;
  }
`

export const TimeIcon = styled(MdTimerOff)`
  background-color: #fa6565;
  border-radius: 50%;
  position: absolute;
  z-index: 5;
  top: 60px;
  filter: drop-shadow(0px 0px 19px #222222);
  color: ${(props) => props.theme.background};

  @media (max-width: 760px) {
    top: -10px;
    left: 0px;
    right: 610px;
    margin-left: auto;
    margin-right: auto;
    filter: none;
  }
`

export const IconDiv = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: absolute;
  background-color: #282828;
  z-index: 4;
  top: 10px;
  left: 14px;
`
