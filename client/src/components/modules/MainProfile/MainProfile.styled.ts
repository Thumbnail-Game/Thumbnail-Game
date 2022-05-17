import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  width: 1000px;
  height: 280px;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: auto;
  border-radius: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: ${(props) => props.theme.profileBackground};

  @media (max-width: 510px) {
    width: 96%;
  }
`

export const LeftContainer = styled.div`
  width: 300px;
  height: 210px;
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
  white-space: nowrap;
`

export const AccountCreatedDate = styled.div`
  font-family: 'Helvetica';
  font-size: 20px;
  margin-bottom: 125px;
`

export const MiddleContainer = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  margin-top: 85px;

  @media (max-width: 510px) {
    display: none;
  }
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
  font-family: 'Helvetica';
  font-size: 22px;
  margin-left: 2px;
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
  font-family: Gothic Bold;
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
    background-color:	#808080;
  }
`

export const Toggle = styled.div`
  position: absolute;
  right: 0;
  font-family: 'Gothic Bold';
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer;
  background-color: ${(props) => props.theme.toggleButton};
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  &:hover {
    animation-name: ${ToggleAnimation};
    animation-duration: 250ms;
    animation-fill-mode: forwards;
  }
`

export const GamemodeTitle = styled.div`
  font-size: 40px;
  font-family: 'Gothic Bold';
  text-decoration: overline;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
  text-underline-offset: 10px;
`
