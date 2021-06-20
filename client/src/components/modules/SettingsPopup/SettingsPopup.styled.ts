import styled from 'styled-components'
import { BsFillTriangleFill } from 'react-icons/bs'

export const TriangleIcon = styled(BsFillTriangleFill)`
  position: absolute;
  width: 50px;
  top: 46px;
  left: 12px;
  color: ${(props) => props.theme.settingBackground};
`

export const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 200px;
  height: 50px;
  top: 60px;
  width: 200px;
  background-color: ${(props) => props.theme.settingBackground};
  border-radius: 10px;
  z-index: 1;
  filter: ${(props) =>
    props.theme.theme === 'dark'
      ? 'drop-shadow(1px 1px 10px #222222);'
      : 'drop-shadow(1px 1px 3px #444444);'}
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none;
`

export const ThemeLabel = styled.div`
  font-size: 18px;
  margin: 13px 14px 0px 0px;
  font-family: 'Gothic Bold';
  color: ${(props) => props.theme.primaryText};
`
