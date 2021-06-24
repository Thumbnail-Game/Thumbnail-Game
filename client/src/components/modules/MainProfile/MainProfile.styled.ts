import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  width: 1000px;
  height: 280px;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 12px #181818;
  background-color: ${(props) => props.theme.profileBackground};
`

export const LeftContainer = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-left: 30px;
`

export const Name = styled.div`
  font-family: 'Gothic Bold';
  font-size: 32px;
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
  text-underline-offset: 10px;
`

export const AccountCreatedDate = styled.div`
  font-family: 'Gothic Bold';
  font-size: 20px;
  margin-bottom: 60px;
`

export const MiddleContainer = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  margin-top: 85px;
`

export const PercentileTitle = styled.div`
  font-family: Gothic Bold;
  font-size: 20px;
`

interface PercentileProps {
  isAbove50: boolean
}

export const Percentile = styled.div<PercentileProps>`
  font-family: Gothic Bold;
  font-size: 70px;
  color: ${(props) => (props.isAbove50 ? '#8AE37C' : '#E37C7C')};
`

export const PercentileLabel = styled.div`
  font-family: Gothic Bold;
  font-size: 20px;
`

export const RightContainer = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  margin-top: 83px;
`

export const LevelText = styled.div`
  font-family: Gothic Bold;
  font-size: 20px;
`

export const PercentText = styled.div`
  align-self: flex-end;
  margin-top: 5px;
  font-family: 'Gothic Bold';
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
  background-color: #e37c7c;
  margin-right: 20px;
  color: white;
`

const ToggleAnimation = keyframes`
  0%{
  }
  100%{
    background-color:#282828;
  }
`

export const Toggle = styled.div`
  position: absolute;
  right: 0;
  font-family: 'Gothic Bold';
  background-color: #606060;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    animation-name: ${ToggleAnimation};
    animation-duration: 250ms;
    animation-fill-mode: forwards;
  }
`

export const GamemodeTitle = styled.div`
  position: absolute;
  top: 22px;
  font-family: Gothic Bold;
  font-size: 32px;
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
  text-underline-offset: 10px;
`
