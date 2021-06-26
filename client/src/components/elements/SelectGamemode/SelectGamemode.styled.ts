import { RiTimerLine } from 'react-icons/ri'
import { GiRetroController } from 'react-icons/gi'
import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 760px;
  margin: auto;
  width: 1200px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 760px) {
    position:absolute;
    top:0;
    bottom:30px;
    left:0;
    right:0;
    margin:auto;
    flex-direction:column;
    width:500px;
  }
`

export const GamemodeContainerAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.03);
  }
`

export const GamemodeContainerAnimationOut = keyframes`
  100% {
    transform: scale(1);
  }
  0% {
    transform: scale(1.03);
  }
`

export const GamemodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 500px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 0px 12px #181818;
  animation-name: ${GamemodeContainerAnimationOut};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  background-color: ${(props) => props.theme.profileBackground};
  padding-left: 50px;
  padding-right: 50px;

  &:hover {
    animation-name: ${GamemodeContainerAnimation};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }

  @media (max-width: 645px) {
    margin-top: 50px;
  }
`

export const TimedIcon = styled(RiTimerLine)`
  margin: 50px 0px 50px 0px;
  width: 200px;
  height: 200px;
`

export const CasualIcon = styled(GiRetroController)`
  margin: 50px 0px 50px 0px;
  width: 200px;
  height: 200px;
`

export const Title = styled.div`
  font-size: 40px;
  font-family: 'Gothic Bold';
  margin-bottom: 25px;
`

export const Description = styled.div`
  font-size: 20px;
  font-family: 'Gothic Bold';
  padding-bottom: 15px;
`
