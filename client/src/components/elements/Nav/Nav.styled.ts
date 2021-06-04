import Image from 'next/image'
import styled from 'styled-components'

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
      animation: 300ms fadeIn;
      animation-fill-mode: forwards;
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
