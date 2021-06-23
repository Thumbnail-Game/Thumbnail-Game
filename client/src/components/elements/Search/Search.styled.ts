import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin:auto;
  background-color: ${(props) => props.theme.profileBackground};
`

export const Input = styled.input`
  padding: 15px;
  width: 250px;
  margin:auto;
  outline: none;
  border:none;
  border-radius: 7px;
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


export const Wrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:space-around;
  background-color:red;
`
