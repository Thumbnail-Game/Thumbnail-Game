import Image from 'next/image'
import { MdSettings } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { AiFillTrophy } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1500px;
  margin: auto;
  position: relative;
  top: 22.5px;

  @media (max-width: 760px) {
    width: 100%;
  }
`

export const Logo = styled(Image)``

export const LogoContainer = styled.div`
  cursor: pointer;
  height: 49px;
  overflow: hidden;
  z-index: 1;
  margin-left: 7px;

  @media (max-width: 760px) {
    margin-top: 13px;
  }
`

export const SignInUp = styled.div`
  font-family: 'Gothic Bold';
  font-size: 19.5px;
  cursor: pointer;
  position: relative;

  z-index: 1;
  margin-left: 10px;
  margin-right: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 295px;
  height: 50px;
`

const fillButton = keyframes`
 0% {
   height: 0px;
   width: 0px;
   top:10px;
   left:20px;
 }
 70% {
  width:100px;
  height:44px;
  top:-8px;
  left:-21px;
  border-radius:25px;
  position:absolute;
  z-index:-1;
 }
 100% {
  width:87px;
  height:38px;
  top:-5.75px;
  left: -16px;
  border-radius:20px;
  position:absolute;
  z-index:-1;
 }
`

const DarkfillButton2 = keyframes`
 0% {
    background-color:red;
 }
 100% {
   background-color: #9F1313;
 }
`

const LightfillButton2 = keyframes`
 0% {
    background-color:red;
 }
 100% {
   background-color: #E94D4D;
 }
`

export const SignInUpHover2 = styled.div`
  width: 87px;
  height: 38px;
  top: -5px;
  left: -8.5px;
  border-radius: 8px;
  background-color: #ff0000;
  position: absolute;
  z-index: -1;
  ${SignInUp}:hover & {
    animation-name: ${(props) =>
      props.theme.theme === 'dark' ? DarkfillButton2 : LightfillButton2};
    animation-duration: 200ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`

export const Nav = styled.div`
  width: 100%;
  height: 110px;
  background-color: ${(props) => props.theme.navBackground};
  position: relative;
  z-index: 2;

  @media (max-width: 760px) {
    height: 140px;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 8px;
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

const fillSetting2 = keyframes`
 0% { height: 0px; width: 0px;  top:19px; left:15px; }
 70%{
  width:53px;
  height:53px;
  top:-6.4px;
  left:-10.8px;
  border-radius:50%;
  position:absolute;
  z-index:0;
 }
 100% {
  width:45px;
  height:45px;
  top: -2.7px;
  left: -7.4px;
  border-radius:50%;
  position:absolute;
  z-index:0;
  }
`

export const SettingsPopUpRow = styled.div`
  position: relative;
`

export const SearchIcon = styled(AiFillTrophy)`
  position: relative;
  top: 0.5px;
  right: 2px;
  z-index: 1;
`

export const SettingsIcon = styled(MdSettings)`
  position: relative;
  z-index: 1;
`

export const PersonIcon = styled(BsFillPersonFill)`
  position: relative;
  z-index: 1;
  margin-top: 5px;
  cursor: pointer;
`

export const NavIconWrapper = styled.div`
  position: relative;
  display: 'flex';
  flex-direction: column;
  justify-content: space-between;
  justifycontent: 'center';
  alignitems: 'center';
  height: '100%';
  top: 4px;
  cursor: pointer;
  margin-right: 1px;
`

export const IconContainer = styled.div`
  position: relative;
`
export const SearchHover = styled.div`
  ${NavIconWrapper}:hover & {
    width: 45px;
    height: 45px;
    top: -8.7px;
    left: -10.8px;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    animation-name: ${fillSetting};
    animation-duration: 300ms;
    animation-iteration-count: 1;
    background-color: #e7e7e7;
  }
  ${IconContainer}:hover & {
    width: 45px;
    height: 45px;
    top: -2.7px;
    left: -9.4px;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    animation-name: ${fillSetting2};
    animation-duration: 300ms;
    animation-iteration-count: 1;
    background-color: #e7e7e7;
  }
`

export const SearchHoverDark = styled.div`
  ${NavIconWrapper}:hover & {
    width: 45px;
    height: 45px;
    top: -8.7px;
    left: -10.8px;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    animation-name: ${fillSetting};
    animation-duration: 300ms;
    animation-iteration-count: 1;
    background-color: #4a4a4a;
  }
  ${IconContainer}:hover & {
    width: 45px;
    height: 45px;
    top: -2.7px;
    left: -9.4px;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    animation-name: ${fillSetting2};
    animation-duration: 300ms;
    animation-iteration-count: 1;
    background-color: #4a4a4a;
  }
`

export const SettingsHover = styled.div`
  ${NavIconWrapper}:hover & {
    width: 45px;
    height: 45px;
    top: -8.7px;
    left: -8.8px;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    background-color: #e7e7e7;
    animation-name: ${fillSetting};
    animation-duration: 300ms;
    animation-iteration-count: 1;
  }
  ${IconContainer}:hover & {
    width: 45px;
    height: 45px;
    top: -2.7px;
    left: -7.4px;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    animation-name: ${fillSetting2};
    animation-duration: 300ms;
    animation-iteration-count: 1;
    background-color: #e7e7e7;
  }
`

export const SettingsHoverDark = styled.div`
  ${NavIconWrapper}:hover & {
    width: 45px;
    height: 45px;
    top: -8.7px;
    left: -8.8px;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    background-color: #4a4a4a;
    animation-name: ${fillSetting};
    animation-duration: 300ms;
    animation-iteration-count: 1;
  }
  ${IconContainer}:hover & {
    width: 45px;
    height: 45px;
    top: -2.7px;
    left: -7.4px;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    animation-name: ${fillSetting2};
    animation-duration: 300ms;
    animation-iteration-count: 1;
    background-color: #4a4a4a;
  }
`

export const SignOutButton = styled.div`
  font-family: 'Gothic Bold';
  font-size: 20px;
  margin-top: -2px;
  cursor: pointer;
  position: relative;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`

const fillButton2 = keyframes`
 0% {
   height: 0px;
   width: 0px;
   top:10px;
   left:30px;
 }
 70% {
  width:105px;
  height:44px;
  top:-8px;
  left:-12px;
  border-radius:25px;
  position:absolute;
  z-index:-1;
 }
 100% {
  width: 98px;
  height: 38px;
  top: -5.75px;
  left: -8.5px;
  border-radius: 20px;
  position: absolute;
  z-index: -1;
 }
`

const fillButton3 = keyframes`
 0% {
   height: 0px;
   width: 0px;
   top:17px;
   left:100px;
 }
 70% {
  width:105px;
  height:44px;
  border-radius:25px;
  position:absolute;
  z-index:-1;
  top:6px;
  left:57px;
 }
 100% {
  width: 98px;
  height: 38px;
  top:9px;
  left:59px;
  border-radius: 20px;
  position: absolute;
  z-index: -1;
 }
`

export const SignInUpHover = styled.div`
  ${SignInUp}:hover & {
    width: 87px;
    height: 38px;
    top: -5.75px;
    left: -16px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.button};
    position: absolute;
    z-index: -1;
    animation-name: ${fillButton};
    animation-duration: 300ms;
    animation-iteration-count: 1;
  }
  ${SignOutButton}:hover & {
    position: absolute;
    background-color: ${(props) => props.theme.button};
    animation-name: ${fillButton2};
    animation-duration: 300ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`

export const SignInUpHoverDark = styled.div`
  ${SignInUp}:hover & {
    width: 87px;
    height: 38px;
    top: -5.75px;
    left: -16px;
    border-radius: 20px;
    background-color: #4a4a4a;
    position: absolute;
    z-index: -1;
    animation-name: ${fillButton};
    animation-duration: 300ms;
    animation-iteration-count: 1;
  }
  ${SignOutButton}:hover & {
    position: absolute;
    background-color: #4a4a4a;
    animation-name: ${fillButton2};
    animation-duration: 300ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`

export const MenuIcon = styled(HiMenu)`
  margin-top: 10px;
  margin-right: 7px;
`

export const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 100%;
  background-color: ${(props) => props.theme.profileBackground};
`
