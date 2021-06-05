import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { MdCancel } from 'react-icons/md'

export const LoseIcon = styled(MdCancel)`
  color: #ff6961;
`

const buttonAnimation = keyframes`
 0% {
  width:0px;
  height:0px;
 }
 40% {
  width:230px;
  height:230px;
 }
 100% {
  width:200px;
  height:200px;
 }
`

export const IconWrapper = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation-name: ${buttonAnimation};
  animation-duration: 2000ms;
  position: relative;
`
