import styled from 'styled-components'

export const HomeWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  top: 0;
  background-color: ${(props) => props.theme.background};
`

export const LogoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 35vh;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);

  @media (max-width: 1100px) {
    height: 30vh;
  }

  @media (max-width: 650px) {
    height: 20vh;
  }

  @media (max-height: 685px) {
    bottom: 250px;
    width: 90%;
  }
`

export const Logo = styled.img`
  position: absolute;
  max-height: 100%;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;

  @media (max-width: 900px) {
    width: 95%;
  }
`

export const Grid = styled.div`
  display: grid;
  border-style: none;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 100vw;
  height: 100vh;
  margin-left: -30px;
  margin-top: -20px;
`
