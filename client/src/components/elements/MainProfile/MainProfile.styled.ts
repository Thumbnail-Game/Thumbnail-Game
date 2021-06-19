import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { MdCancel } from 'react-icons/md'
import { IoIosCheckmarkCircle } from 'react-icons/io'

export const Wrapper = styled.div`
  width: 1000px;
  height: 280px;
  background-color: #3f3f3f;
  display: flex;
  justify-content: space-between;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 20px #111;
`

export const LeftContainer = styled.div`
  width: 300px;
  height: 150px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`

export const Name = styled.div`
  font-family: 'Gothic Bold';
  font-size: 40px;
  text-align: center;
`

export const MiddleContainer = styled.div`
  width: 300px;
  height: 150px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`

export const RightContainer = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`

export const LevelText = styled.div`
  font-family: Gothic Bold;
  font-size: 20px;
`

export const PercentText = styled.div`
  align-self: flex-end;
  margin-top: 5px;
  font-family:"Gothic Bold";
`

export const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const InnerProgressRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  height: 20px;
  width: 70%;
  margin-top: 12px;
`

export const LevelCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gothic Bold';
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-right: 20px;
  color: ${(props) => props.theme.background};
`
