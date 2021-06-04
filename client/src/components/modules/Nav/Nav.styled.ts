import Image from 'next/image'
import { MdSettings } from 'react-icons/md'
import styled, { keyframes } from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1500px;
  margin: auto;
  position: relative;
  top: 22.5px;
`

export const Logo = styled(Image)`
  cursor: pointer;
`

export const SignIn = styled.div`
    font-family:"Gothic Bold";
    font-size: 19.5px;
    cursor:pointer;
    position:relative;
    z-index:1;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const SettingsContainer = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  width:180px;
  height:50px;
`

const fillButton = keyframes`
 0% { height: 0px; width: 0px; top:10px; left:20px;}
 70%{
  width:100px;
  height:44px;
  top:-8px;
  left:-19px;
  border-radius:25px;
  position:absolute;
  z-index:-1;
 }
 100% {
  width:87px;
  height:38px;
  top:-5.75px;
  left:-13px;
  border-radius:20px;
  position:absolute;
  z-index:-1;
  }
`

export const SignInHover = styled.div`
  ${SignIn}:hover & {
      width:87px;
      height:38px;
      top:-5.75px;
      left:-13px;
      border-radius:20px;
      background-color:${(props) => props.theme.button};
      position:absolute;
      z-index:-1;
      animation-name: ${fillButton};
      animation-duration: 300ms;
      animation-iteration-count: 1;
  }
`

export const Nav = styled.div`
  width: 100%;
  height: 110px;
  background-color: ${(props) => props.theme.navBackground};
  position: relative;
`

export const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${(props) => props.theme.divider};
  position: absolute;
  bottom: 0;
  left: 0;
`

const fillSetting = keyframes`
 0% { height: 0px; width: 0px;  top:13px; left:13px; }
 70%{
  width:53px;
  height:53px;
  top:-12.4px;
  left:-12.8px;
  border-radius:50%;
  position:absolute;
  z-index:0;
 }
 100% {
  width:45px;
  height:45px;
  top:-8.4px;
  top:-8.7px;
  border-radius:50%;
  position:absolute;
  z-index:0;
  }
`

export const SettingsIcon = styled(MdSettings)`
  position:relative;
  z-index: 1;
`

export const SettingsIconWrapper = styled.div`
  position:relative;
  display: 'flex';
  justifyContent: 'center';
  alignItems: 'center';
  height: '100%';
  top:4px;
`

export const SettingsHover = styled.div`
  ${SettingsIconWrapper}:hover & {
    width:45px;
    height:45px;
    top:-8.7px;
    left:-8.8px;
    border-radius:50%;
    background-color:${(props) => props.theme.button};
    position:absolute;
    z-index:0;
    animation-name: ${fillSetting};
    animation-duration: 300ms;
    animation-iteration-count: 1;
  }
`
