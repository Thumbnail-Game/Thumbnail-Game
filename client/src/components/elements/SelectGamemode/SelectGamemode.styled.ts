import { RiTimerLine } from 'react-icons/ri'
import { GiRetroController } from 'react-icons/gi'
import { RiCalendarCheckFill } from 'react-icons/ri'
import { HiLockClosed } from 'react-icons/hi'
import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 760px;
  margin: auto;
  width: 1700px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 890px) {
    position: absolute;
    top: 0;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    flex-direction: column;
    width: 500px;
  }

  @media (max-height: 875px) {
    zoom: 0.8;
  }

  @media (max-height: 750px) {
    zoom: 0.7;
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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  animation-name: ${GamemodeContainerAnimationOut};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  background-color: ${(props) => props.theme.profileBackground};
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 50px;

  &:hover {
    animation-name: ${GamemodeContainerAnimation};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }

  @media (max-width: 1600px) {
    margin-top: 150px;
  }

  @media (max-width: 1300px) {
    margin-top: 190px;
  }

  @media (max-width: 1000px) {
    margin-top: 230px;
  }

  @media (max-width: 890px) {
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

export const DailyIcon = styled(RiCalendarCheckFill)`
  margin: 50px 0px 50px 0px;
  width: 200px;
  height: 200px;
`

export const DailyLockedIcon = styled(HiLockClosed)`
  margin: 50px 0px 50px 0px;
  width: 200px;
  height: 200px;
`

export const Title = styled.div`
  font-size: 40px;
  font-family: 'Gothic Bold';
  margin-bottom: 25px;
`

export const SignUpText = styled.div`
  color: red;
  margin-bottom: 10px;
`

export const Description = styled.div`
  font-size: 20px;
  font-family: 'Helvetica';
  padding-bottom: 15px;
`
