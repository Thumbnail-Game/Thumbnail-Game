import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

export const SearchContainer = styled.div`
  background-color: none;
  width: 100%;
  border-radius: 12px;
  font-family: 'Gothic Bold';
  margin: auto;
  height: 100%;
`

export const Input = styled.input`
  padding-top: 14px;
  padding-bottom: 17px;
  padding-left: 25px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 39px;
  background-color: #969696;
  color: black;
  font-family: 'Gothic Bold';
  font-size: 16px;
  margin:auto;

  &::-webkit-search-cancel-button {
    margin-right: 20px;
  }
`

export const UserContainer = styled.div`
  background-color: #353535;
  width: 100%;
  height: 60px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`

export const Wrapper = styled.div`
  width: 350px;
  height: 93%;
  margin: auto;
  overflow:hidden;
`

export const LabelContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 10px;
`

export const Label = styled.div`
  font-size: 32px;
`

