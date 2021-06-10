import styled from 'styled-components'
import Image from 'next/image'
import { Button } from '@material-ui/core'

export const Logo = styled(Image)``

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 100vh;
  margin: auto;
  background-color: blue;
`

export const RegisterButton = styled(Button)`
  position: relative;
  top: 10px;
`
