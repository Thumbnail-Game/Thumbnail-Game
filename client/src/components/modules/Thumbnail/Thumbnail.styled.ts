import styled, { css, keyframes } from 'styled-components'
import Image from 'next/image'
import { LinearProgress } from '@material-ui/core'
import { BiRightArrowAlt } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'

import {
  PlayIcon,
  PlayIconAnimation,
} from '../../elements/PlayIcon/PlayIcon.styled'

interface TotalWrapperProps {
  isLosingAnimation: boolean
}

const OutroAnimation = keyframes`
  0% {
    margin-left:0;
    width:100%;
    display:block;
  }
  100% {
    margin-left: 200%;
    width:100%;
    display:block;
  }
`

export const TotalWrapper = styled.div<TotalWrapperProps>`
  animation: ${(props) =>
    props.isLosingAnimation &&
    css`
      ${OutroAnimation} 1s linear
    `};
  animation-delay: 1s;
  animation-duration: 1000ms;
  animation-fill-mode: forwards;
  overflow: hidden;

  @media (max-width: 760px) {
    height: 100%;
  }

  @media (max-width: 380px) {
    zoom: 0.9;
  }

`

export const VideoText = styled.div`
  font-family: 'Gothic Bold';
  font-size: 26px;
  width: 672px;
  height: 93px;
  overflow: hidden;
  line-height: 1.6;
  margin-top: 11px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

export const VideoContainerAnimation = keyframes`
    0% {
      
      margin-top: 1600px;
    }
    100% {
      margin-top: -10px;
    }
`

interface VideoContainerProps {
  hasPicked: boolean
}

export const VideoContainer = styled.div<VideoContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 540px;
  margin-top: -10px;
  position: relative;
  z-index: 1;

  ${(props) =>
    !props.hasPicked &&
    css`
      margin-top: -1000px;

      animation-name: ${VideoContainerAnimation};
      animation-duration: 500ms;
      animation-fill-mode: forwards;
    `}


`

export const VideoImage = styled(Image)`
  border-radius: 10px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

export const VideoImage2 = styled(Image)`
  border-radius: 10px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

const hoverThumbnail = keyframes`
 0% {
   transform: scale(1);
 }
 70%{
  
  transform: scale(1.04);
  border-radius:10px;
 }
 100% {
  transform: scale(1.034);
  box-shadow: 6px 6px 11px #1b1b1b;
  border-radius:10px;
 }
`

const hoverThumbnailOut = keyframes`
 100% {
  transform: scale(1);
  border-radius:10px;
 }
 0% {
  transform: scale(1.034);
  box-shadow: 9px 9px 11px #1b1b1b;
  border-radius:10px;
 }
`

export const Thumbnail = styled.div`
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  transform: scale(1);
  animation-name: ${hoverThumbnailOut};
  animation-duration: 300ms;
  &:hover {
    transform: scale(1.034);
    animation-name: ${hoverThumbnail};
    animation-duration: 300ms;
    box-shadow: 9px 9px 11px #1b1b1b;
    border-radius: 10px;
  }

  &:hover ${PlayIcon} {
    animation-name: ${PlayIconAnimation};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
`

export const VideoLink = styled.a`
  position: absolute;
  background-color: transparent;
  width: 672px;
  height: 378px;
  z-index: 2;
`

export const Bar = styled.div`
  width: 99.85%;
  height: 7.5px;
  margin-left: 0.8px;
  margin-top: -10.6px;
  position: relative;
  border-radius: 0 0 10px 10px;
  z-index: 1;
  background-color: ${(props) => props.theme.divider};
`

const containerAnimation = keyframes`
 0% {
  width: 1525px;
 }
 100% {
  width: 1790px;
 }
`

interface ContainerProps {
  hasPicked: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 1525px;
  margin: auto;
  justify-content: space-around;
  margin-top: 65px;
  ${(props) =>
    props.hasPicked &&
    css`
      display: flex;
      width: 1790px;
      margin: auto;
      position: relative;
      justify-content: space-around;
      margin-top: 65px;
      animation-name: ${containerAnimation};
      animation-duration: 700ms;
    `}

  @media (max-width: 900px) {
    flex-direction: column;
    width: 672px;
    ${(props) =>
      props.hasPicked &&
      css`
        margin: auto;
        position: relative;
        justify-content: space-between;
        margin-top: 65px;
        animation: none;
      `}
  }
`

export const ViewCount = styled.div`
  text-align: center;
  background-color: none;
  margin-bottom: 15px;
  height: 67px;
  font-family: 'Gothic Bold';
`

export const HiddenDiv = styled.div`
  height: 88px;
  marginbottom: 18px;
`

const fillButton = keyframes`
 0% {
  width: 0px;
  height: 0px;
  border-radius: 50%;
  position: absolute;
  top:45px;
  left: 45px;
  right: 45px;
  bottom: 45px;
  background-color: #daf2e6;
 }
 40%{
  width: 104px;
  height: 104px;
  border-radius: 50%;  
  top:-6.5px;
  left: -6.5px;
  background-color: #daf2e6;
 }
 100% {
   top: -2px;
   left: -2px;
  width: 94px;
  height: 94px;
  border-radius: 50%;
 }
`

const fillButtonMediaQueried = keyframes`
 0% {
  width: 0px;
  height: 0px;
  border-radius: 50%;
  position: absolute;
  top:45px;
  left: 45px;
  right: 45px;
  bottom: 45px;
  background-color: #daf2e6;
 }
 40%{
  width: 136px;
  height: 136px;
  border-radius: 50%;  
  top:-6.5px;
  left: -6.5px;
  background-color: #daf2e6;
 }
 100% {
  width: 122px;
  height: 122px;
  border-radius: 50%;
 }
`

const moveButton = keyframes`
  0%{
    margin-top: 270px;
    opacity:0;
  }
  70%{
    margin-top: 250px;
    opacity:0.7;
  }
  100%{
    opacity:1;
    margin-top: 30px;
  }
`

export const Button = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  outline: none;
  border: none;
  position: relative;
  margin-top: 30px;
  z-index: 1;
  animation-name: ${moveButton};
  animation-duration: 1300ms;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.nextArrow};

  @media (max-width: 770px) {
    width: 120px;
    height: 120px;
    animation: none;
    margin-top: 40px;
  }
`
export const Filler = styled.div`
  width: 94px;
  height: 94px;
  border-radius: 50%;
  position: absolute;
  top: -2px;
  left: -2px;
  right: 0;
  bottom: 0;
  z-index: 0;
  ${Button}:hover & {
    animation-name: ${fillButton};
    animation-duration: 400ms;
    background-color: #6edba3;
  }

  @media (max-width: 760px) {
    width: 122px;
    height: 122px;

    ${Button}:hover & {
      animation-name: ${fillButtonMediaQueried};
      animation-duration: 400ms;
      background-color: #6edba3;
    }
  }
`

export const RightArrow = styled(BiRightArrowAlt)`
  margin-top: 2px;
  margin-left: -1.5px;
`

export const LoseIcon = styled(MdCancel)`
  color: ${(props) => props.theme.divider};
  margin: auto;
`

export const ArrowHover = styled.div`
  display: 'flex';
  width: '90px';
  height: '90px';
  justifycontent: 'space-between';
  alignitems: 'center';
  marginleft: '-5.5px';
  margintop: '-1px';
  position: relative;
  z-index: 1;
`

const fillShade = keyframes`
 0% {
  position: absolute;
   opacity:0;
   width:0%;
 }
 100% {
  position: absolute;
  opacity:0.2;
  width:100%;
 }
`

const fillShadeOut = keyframes`
 100% {
   opacity:0;
   width:0%;
 }
 0% {
  opacity:0.2;
  width:100%;
  background-color:#C2EEC4;
 }
`
const fillShadeOut2 = keyframes`
 100% {
   opacity:0;
   width:0%;
 }
 0% {
  opacity:0.2;
  width:100%;
  background-color:#eec4c4;
 }
`

export const Shade = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0.2;
  background-color: #eec4c4;
  animation: ${fillShade} 1000ms;
`

export const Shade2 = styled.div`
  height: 100%;
  width: 100%;
  background-color: #c2eec4;
  position: absolute;
  top: 0;
  opacity: 0.2;
  animation: ${fillShade} 1000ms;
`

export const ShadeOut = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0.2;
  animation: ${fillShadeOut} 700ms;
`

export const ShadeOut2 = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0.2;
  animation: ${fillShadeOut2} 700ms;
`

export const LinearLoader = styled(LinearProgress)``
