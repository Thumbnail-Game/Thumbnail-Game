import styled, { keyframes } from 'styled-components'

const VideoHover = keyframes`
    0%{
        transform:scale(1);
    }
    100%{
        transform:scale(1.01);
    }
`

const VideoHoverOut = keyframes`
    100%{
        transform:scale(1);
    }
    0%{
        transform:scale(1.02);
    }
`

export const VideoWrapper = styled.div`
  width: 330px;
  height: 190px;
  background-color: ${(props) => props.theme.background};
  position: relative;
  z-index: 0;
  animation-name: ${VideoHoverOut};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  border-radius: 5px;

  &:hover {
    animation-name: ${VideoHover};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    border-radius: 5px;
    z-index: 1;
  }
`

export const VideoThumbnail = styled.div`
  width: 320px;
  height: 180px;
  background-color: transparent;
  position: absolute;
  border-radius: 5px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 0;
`
