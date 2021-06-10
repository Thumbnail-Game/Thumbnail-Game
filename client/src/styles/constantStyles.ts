import styled from 'styled-components'
import Image from 'next/image'
import { Grid } from '@material-ui/core'

export const CenterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 200px;
`

export const StyledGridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const HeaderText = styled.div`
  font-size: 50px;
  text-align: center;
  font-family: Gothic Bold;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin-top: 40px;
`

export const SubText = styled.div`
  font-size: 25px;
`

export const FormContainer = styled.div`
  position: absolute;
  margin: auto;
  inset: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 600px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.settingBackground};

  @media (max-width: 650px) {
    width: 80%;
    height: 500px;
  }
`

export const Logo = styled(Image)``
