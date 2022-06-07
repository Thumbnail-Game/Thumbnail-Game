import styled from 'styled-components'

export const PopupContainer = styled.div`
  position: absolute;
  overflow: hidden;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 728px;
  height: 450px;
  aspect-ratio: 1/1;
  background-color: black;
`
export const VerticalPopup = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 1%;
  z-index: 10;
  width: 200px;
  height: 600px;

  @media (max-width: 700px) {
    display: none;
  }
`
export const VerticalPopup2 = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 1%;
  z-index: 10;
  width: 200px;
  height: 600px;

  @media (max-width: 700px) {
    display: none;
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
