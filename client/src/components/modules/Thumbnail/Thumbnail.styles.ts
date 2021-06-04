import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const VideoText = styled.div`
  font-size: 26px;
  font-family: 'Gothic Bold';
  width: 672px;
  height: 84px;
  overflow: hidden;
  line-height: 1.6;
  margin-top: 11px;
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Bar = styled.div`
  width: 672px;
  height: 7.5px;
  margin-top: -7.3px;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.theme.divider};
`

export const Container = styled.div`
  display: flex;
  width: 1525px;
  margin: auto;
  justify-content: space-around;
  margin-top: 110px;
`

export const ViewCount = styled.div`
  text-align: center;
  background-color: none;
  margin-bottom: 30px;
  margin-top: -30px;
`
const fillButton = keyframes`
 0% {width: 0px; height: 0px;}
 100% { width: 90px; height: 90px;     background-color: #666666;}
`

export const Button = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: white;
  margin-top: 60px;
`

export const Filler = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  ${Button}:hover & {
    animation-name: fillButton;
    animation-duration: 500ms;
    background-color: #666666;
  }
`
