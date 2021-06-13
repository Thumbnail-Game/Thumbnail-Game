import styled, { keyframes } from 'styled-components'
import { Button } from '@material-ui/core'

export const RegisterButton = styled(Button)`
  position: relative;
  top: 10px;
  width: 160px;
  height: 50px;
`
export const Divider = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: red;
`

export const BackButton = styled.button`
  background-color: ${(props) => props.theme.button};
  width: 90px;
  height: 40px;
  bottom:30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  position:relative;
  outline: none;
  border: none;
  border-radius: 10px;
  font-family: 'Gothic Bold';
  font-size: 18px;
  color: ${(props) => props.theme.primaryText};
  &:hover {
    background-color: ${(props) => props.theme.settingBackground};
  }
`
