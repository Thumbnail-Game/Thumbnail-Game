import styled from 'styled-components'
import { BsFillTriangleFill } from 'react-icons/bs'

interface TriangleIconProps {
  $signedIn: boolean
}

export const TriangleIcon = styled(BsFillTriangleFill)<TriangleIconProps>`
  position: absolute;
  width: 50px;
  top: 46px;
  right: ${(props) => (props.$signedIn ? '177px' : '198px')};
  color: ${(props) => props.theme.settingBackground};
`

interface SettingsContainerProps {
  signedIn: boolean
}

export const SettingsContainer = styled.div<SettingsContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 90px;
  right: ${(props) => (props.signedIn ? '160px' : '185px')};
  top: 60px;
  width: 200px;
  border-radius: 10px;
  z-index: 7;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  background-color: ${(props) => props.theme.settingBackground};
  filter: ${(props) =>
    props.theme.theme === 'dark'
      ? 'drop-shadow(1px 1px 10px #222222);'
      : 'drop-shadow(1px 1px 3px #444444);'};
`

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`

export const ThemeLabel = styled.div`
  font-size: 18px;
  margin: 13px 14px 0px 15px;
  font-family: 'Gothic Bold';
  color: ${(props) => props.theme.primaryText};
`

export const TransparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  top: 0;
  width: 100vw;
  opacity: 0;
  height: 100vh;
  z-index: 1;
  background-color: black;
`
