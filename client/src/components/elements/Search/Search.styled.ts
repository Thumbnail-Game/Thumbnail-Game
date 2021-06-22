import styled from 'styled-components'

export const Wrapper = styled.div`
display flex;
flex-direction: column;
align-items: center;
height: 100vh;
background-color: purple;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 800px;
  height: 90vh;
  margin: auto;
  background-color: red;
`

export const Input = styled.input`
  padding: 15px;
  width: 250px;
  margin: 15px 15px 15px 15px;
  background: ${(props) => props.theme.formBackground};
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 350px;
  height: 90px;
  cursor: pointer;
  background-color: blue;
`
