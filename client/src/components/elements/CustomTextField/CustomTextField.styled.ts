import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const CustomTextField = styled(TextField)`
  background-color: ${(props) => props.theme.formBackground};
  width: 90%;
  height: 60px;
  margin: auto;
  border-radius: 7px;
`
