import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const CenterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 200px;
`

export const StyledGridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const HeaderText = styled.div`
  font-size: 45px;
  text-align: center;
  font-family: Gothic Bold;
  margin-top: 60px
`

export const SubText = styled.div`
  font-size: 25px;
`
