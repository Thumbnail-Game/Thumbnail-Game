import styled from 'styled-components'
import { animated } from 'react-spring'

export const PopupContainer = styled.div`
  position: absolute;
  overflow: hidden;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 728px;
  aspect-ratio: 1/1;
  background-color: black;
`
export const VerticalPopup = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 3%;
  z-index: 10;
  width: 200px;
  height: 600px;
  background-color: black;
`
export const VerticalPopup2 = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 3%;
  z-index: 10;
  width: 200px;
  height: 600px;
  background-color: black;
`
export const PopUpBackground = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 10%;
`
