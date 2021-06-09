import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const CustomTextField = styled(TextField)`
  width: 600px;
  background-color: ${(props) => props.theme.settingBackground};
`
