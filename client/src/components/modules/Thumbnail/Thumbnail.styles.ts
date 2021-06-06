import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'

export const VideoText = styled.div`
  font-size: 26px;
  font-family: 'Gothic Bold';
  width: 672px;
  height: 84px;
  overflow: hidden;
  line-height: 1.6;
  margin-top: 11px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 540px;
  margin-top: -10px;
  position:relative;
  z-index:1;
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
  box-shadow: 9px 9px 11px #1b1b1b;
  border-radius:10px;
 }
`

const hoverThumbnailOut = keyframes`
 100% {
  transform: scale(1);
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
`


export const Bar = styled.div`
  width: 99.85%;
  height: 7.5px;
  margin-left: 0.8px;
  margin-top: -11px;
  position: relative;
  border-radius: 0 0 10px 10px;
  z-index: 1;
  background-color: ${(props) => props.theme.divider};
`


export const Container = styled.div`
  display: flex;
  width: 1525px;
  margin: auto;
  justify-content: space-around;
  margin-top: 65px;
`

const container2Animation = keyframes`
 0% {
  width: 1525px;
 }
 100% {
  width: 1790px;
 }
`

export const Container2 = styled.div`
  display: flex;
  width: 1790px;
  margin: auto;
  justify-content: space-around;
  margin-top: 65px;
  animation-name: ${container2Animation};
  animation-duration: 700ms;
`

export const ViewCount = styled.div`
  text-align: center;
  background-color: none;
  margin-bottom: 15px;
  height: 67px;
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
  width: 90px;
  height: 90px;
  border-radius: 50%;
 }
`

const moveButton = keyframes`
  0%{
    margin-top: 250px;

  }
  70%{
    margin-top: 250px;

  }
  100%{

    margin-top: 30px;
  }
`

export const Button = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: white;
  position: relative;
  margin-top: 30px;
  animation-name: ${moveButton};
  animation-duration: 1300ms;
`
export const Filler = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 50%;
  position: absolute;
  top: -0.5px;
  left: -0.5px;
  right: 0;
  bottom: 0;
  z-index: 0;
  ${Button}:hover & {
    animation-name: ${fillButton};
    animation-duration: 400ms;
    background-color: #6edba3;
  }
`

export const RightArrow = styled(BiRightArrowAlt)``

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
   opacity:0;
   width:0%;
 }
 100% {
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
  background-color:#C2EEC4;
 }
`

export const Shade = styled.div`
  position:absolute;
  height: 100000px;
  margin-top:-5000px;
  width:100%;
  background-color:#EEC4C4;
  opacity: 0.2;
  animation: ${fillShade} 1000ms;
`

export const Shade2 = styled.div`
  position:absolute;
  height: 100000px;
  margin-top:-5000px;
  width:100%;
  background-color:#C2EEC4;
  opacity: 0.2;
  animation: ${fillShade} 1000ms;
`

export const ShadeOut = styled.div`
  position:absolute;
  height: 100000px;
  margin-top:-5000px;
  width:100%;
  animation: ${fillShadeOut} 700ms;
`

export const ShadeOut2 = styled.div`
  position:absolute;
  height: 100000px;
  margin-top:-5000px;
  width:100%;
  animation: ${fillShadeOut2} 700ms;
`
