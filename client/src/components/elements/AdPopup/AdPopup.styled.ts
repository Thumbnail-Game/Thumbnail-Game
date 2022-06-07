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
  height: 650px;
  aspect-ratio: 1/1;
  background-color:green;

  @media(max-width:800px){
    height: 550px;
  }
  @media(max-width:600px){
    height: 300px;
  }
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
