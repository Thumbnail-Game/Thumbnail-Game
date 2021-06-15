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
  font-family: Gothic Bold;
  font-size: 50px;
  text-align: center;
  user-select: none;
  margin-top: 40px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  @media (max-width: 1200px) {
    font-size: 30px;
  }
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
  width: 400px;
  height: 500px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.settingBackground};
  z-index:2;
  @media (max-width: 650px) {
    width: 80%;
    height: 500px;
  }
`

export const BackButton = styled.div`
  background-color: ${(props) => props.theme.button};
  width: 90px;
  height: 21px;
  padding-top: 10px;
  padding-bottom: 10px;
  bottom: 30px;
  margin: auto;
  margin-bottom: 190px;
  top: 0;
  bottom: 0;
  top: 100px;
  text-align: center;
  left: 0;
  right: 0;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 10px;
  font-family: 'Gothic Bold';
  font-size: 18px;
  color: ${(props) => props.theme.primaryText};

  &:hover {
    background-color: ${(props) => props.theme.settingBackground};
  }

  @media screen and (max-height: 1030px) {
    margin-bottom: 70px;
  }
  @media screen and (max-height: 820px) {
    margin-bottom: 20px;
  }
  @media screen and (max-height: 690px) {
    margin-bottom: 5px;
  }
  @media screen and (max-height: 650px) {
    display: none;
  }
`

export const Logo = styled(Image)``
