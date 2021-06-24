import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { MdCancel, MdTimerOff } from 'react-icons/md'
import { IoIosCheckmarkCircle } from 'react-icons/io'

export const LoseIcon = styled(MdCancel)`
  color: #ff6961;
  filter: drop-shadow(9px 9px px #222222);
`

export const TimeIcon = styled(MdTimerOff)`
  background-color: #fa6565;
  border-radius: 50%;
  filter: drop-shadow(9px 9px px #222222);
  color: ${(props) => props.theme.background};
`

export const WinIcon = styled(IoIosCheckmarkCircle)`
  color: #6edba3;
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
`
