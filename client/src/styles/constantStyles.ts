import styled, { keyframes } from 'styled-components'
import { IoMdArrowRoundBack } from 'react-icons/io'
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

export const Divider = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: red;
`

export const FormWrapper = styled.div`
  display: flex;
  width: 1300px;
  height: 600px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  border-radius: 30px;
  background-color: ${(props) => props.theme.settingBackground};

  @media (max-width: 950px) {
    width: 500px;
  }

  @media (max-width: 400px) {
    width: 400px;
  }
`

export const PreviewImage = styled.img``

export const FormContainer = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 500px;
  padding: 20px;
  z-index: 2;

  @media (max-width: 650px) {
    width: 80%;
    height: 500px;
  }
`

export const BackButton = styled(IoMdArrowRoundBack)`
  position: absolute;
  padding: 16px;
  margin: auto;
  bottom: -180px;
  left: 0;
  right: 0;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 50%;
  font-family: 'Gothic Bold';
  cursor: pointer;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.button};

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

export const PopupIntro = keyframes`
  0%{
    top:-1000px;
  }
  100%{
    top:20px;
  }
`

export const PopupBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  margin: auto;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  width: 1120px;
  height: 700px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.profileBackground};

  animation-name: ${PopupIntro};
  animation-duration: 300ms;
  animation-fill-mode: forwards;

  @media (max-width: 580px) {
    width: 98%;
  }
`

export const PopupTransparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  opacity: 0.6;
  background-color: #111111;
`

export const ToggleSwitchContainer = styled.div`
  position: relative;
  top: 12.5px;
  left: 14px;
  z-index: 1;
`
