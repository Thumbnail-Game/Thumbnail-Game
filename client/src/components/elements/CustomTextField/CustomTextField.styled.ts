import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const CustomTextField = styled(TextField)`
  width: 300px;
  height: 60px;
  margin-top: 35px;
  margin-bottom: 15px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.formBackground};

  &:nth-child(4) {
    margin-bottom: 30px;
    color: red !important;
  }
`
