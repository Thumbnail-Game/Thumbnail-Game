import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const LoginButton = styled(Button)`
  position: relative;
  top: 10px;
  width: 160px;
  height: 50px;
`
export const Divider = styled.div`
  position: absolute;
  width:100%;
  height:20px;
  background-color:red;
`

export const BackButton = styled.button`
  position: absolute;
  background-color:${props => props.theme.button};
  width:90px;
  height:40px;
  top:80%;
  margin-left:auto;
  margin-right:auto;
  left:0;
  right:0;
  outline:none;
  border:none;
  border-radius:10px;
  font-family:"Gothic Bold";
  font-size:18px;
  color:${props => props.theme.primaryText};
  &:hover{
    background-color:${props => props.theme.settingBackground};
  }
`

export const Redirect = styled.div`
  cursor:pointer;
  margin-top:20px;
  &:hover{
    text-decoration: underline;
  }
`