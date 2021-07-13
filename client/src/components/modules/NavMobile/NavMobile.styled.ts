import { FaPlay } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { AiFillTrophy } from 'react-icons/ai'
import styled from 'styled-components'

export const SignInUp = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
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
  color: ${(props) => props.theme.primaryText};
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
`

export const Nav = styled.div`
  width: 100%;
  height: 110px;
  position: relative;
  z-index: 2;
  background-color: ${(props) => props.theme.navBackground};

  @media (max-width: 760px) {
    height: 140px;
  }
`

export const SettingsPopUpRow = styled.div`
  position: relative;
`

export const PlayIcon = styled(FaPlay)`
  padding: 15px;
  position: relative;
  top: 0.5px;
  right: 2px;
  z-index: 1;
`

export const LeaderboardIcon = styled(AiFillTrophy)`
  padding: 15px;
  position: relative;
  top: 0.5px;
  right: 2px;
  z-index: 1;
`

export const SettingsIcon = styled(MdSettings)`
  padding: 15px;
  position: relative;
  z-index: 1;
`

export const PersonIcon = styled(BsFillPersonFill)`
  padding: 15px;
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
export const SignOutButton = styled.div`
  zIndex 2;
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
color: ${(props) => props.theme.primaryText};
`

export const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  height: 100%;
  background-color: ${(props) => props.theme.profileBackground};
`

export const MenuIcon = styled(HiMenu)`
  margin-top: 10px;
  margin-right: 7px;
`
