import styled from 'styled-components'

export const SearchContainer = styled.div`
  background-color: none;
  width: 100%;
  border-radius: 12px;
  font-family: 'Gothic Bold';
  margin: auto;
  height: 100%;
  overflow-y: scroll;
  margin-top: 31px;

  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.toggleButton};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ff0000;
  }
  &::-webkit-scrollbar-track {
    background: none;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const Input = styled.input`
  margin-top: 20px;
  padding-top: 14px;
  padding-bottom: 17px;
  padding-left: 25px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 39px;
  font-family: 'Gothic Bold';
  font-size: 16px;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.scoreBackground};

  ::-webkit-search-cancel-button {
    margin-right: 25px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 3%;
  width: 91%;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.scoreBackground};
`

export const Wrapper = styled.div`
  width: 350px;
  height: 93%;
  margin: auto;
  overflow: hidden;
  text-align: left;
`

export const LabelContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 10px;
`

export const Label = styled.div`
  font-size: 32px;
`
