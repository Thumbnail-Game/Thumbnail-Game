import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { MdCancel, MdTimerOff } from 'react-icons/md'
import { IoIosCheckmarkCircle } from 'react-icons/io'

export const LoseIcon = styled(MdCancel)`
  color: #ff6961;
  filter: drop-shadow(0px 0px 25px #222222);
`

export const TimeIcon = styled(MdTimerOff)`
  background-color: #fa6565;
  border-radius: 50%;
  padding:20px;
  filter: drop-shadow(0px 0px 25px #222222);
  color: ${(props) => props.theme.background};
  margin:auto;
`

export const WinIcon = styled(IoIosCheckmarkCircle)`
  color: #6edba3;
  filter: drop-shadow(0px 0px 25px #222222);
`

const buttonAnimation = keyframes`
 0% {
  width:0px;
  height:0px;
 }
 40% {
  width:350px;
  height:350px;
 }
 100% {
  width:300px;
  height:300px;
 }
`

const buttonAnimationMobile = keyframes`
 0% {
  width:0px;
  height:0px;
 }
 40% {
  width:190px;
  height:190px;
 }
 100% {
  width: 150px;
  height: 150px;
 }
`

export const IconWrapper = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  animation-name: ${buttonAnimation};
  animation-duration: 1000ms;
  position: absolute;
  top: 45%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  
  @media (max-width: 760px) {
    top:10px;
    left:30px;
    width: 150px;
    height: 150px;
    animation-name: ${buttonAnimationMobile};
  }
`