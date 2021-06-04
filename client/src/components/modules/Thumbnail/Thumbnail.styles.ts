import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Image from 'next/image'

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
  justify-content:space-around;
  height: 540px;
  margin-top:-10px;
`

export const VideoImage = styled(Image)`
  border-radius:10px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

const hoverThumbnail = keyframes`
 100% {
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
  &:hover{
    transform: scale(1.034);
    animation-name: ${hoverThumbnail};
    animation-duration: 300ms;
    box-shadow: 9px 9px 11px #1b1b1b;
    border-radius:10px;
  }
  
`

export const Bar = styled.div`
  width: 670.5px;
  height: 7.5px;
  margin-left:0.8px;
  margin-top: -11px;
  position: relative;
  border-radius:0 0 10px 10px;
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

export const ViewCount = styled.div`
  text-align: center;
  background-color: none;
  margin-bottom:15px;
  height: 67px;
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

export const Button = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: white;
  position:relative;
  margin-top: 30px;
`

export const Filler = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 50%;
  position: absolute;
  top:-0.5px;
  left: -0.5px;
  right: 0;
  bottom: 0;
  z-index: 0;
  ${Button}:hover & {
    animation-name: ${fillButton};
    animation-duration: 400ms;
    background-color: #6EDBA3;
  }
`
