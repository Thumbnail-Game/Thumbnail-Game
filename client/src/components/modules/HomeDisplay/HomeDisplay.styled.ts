import styled from 'styled-components'

export const Parent = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
`

export const Line = styled.div`
  position: absolute;
  height: 30px;
  width: 100%;
  background-color: ${(props) => props.theme.divider};
  top: 103px;
  box-shadow: 15px 15px 18px black;
  z-index: 2;
`

export const Logo = styled.img`
  position: absolute;
  width: 70%;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  filter: drop-shadow(15px 15px 16px black);
  z-index: 2;

  @media(max-width:900px) {
      width:95%;
  }

`

export const Grid = styled.div`
  display: grid;
  border-style: solid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 100vw;
  height: 100vh;
`
