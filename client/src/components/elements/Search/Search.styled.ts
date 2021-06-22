import styled from 'styled-components'

export const Wrapper = styled.div`
display flex;
flex-direction: column;
align-items: center;
height: 100vh;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 800px;
  height: 400px;
  margin: auto;
  border-radius: 15px;
  overflow: auto;
  background-color: ${(props) => props.theme.profileBackground};
`

export const Input = styled.input`
  padding: 15px;
  width: 250px;
  margin: 15px 15px 15px 15px;
  outline: none;
  border-radius: 7px;
  background: ${(props) => props.theme.formBackground};
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 350px;
  min-height: 90px;
  cursor: pointer;
  border-radius: 15px;
  background-color: ${(props) => props.theme.scoreBackground};
  margin: 15px 0px 15px 0px;
`
