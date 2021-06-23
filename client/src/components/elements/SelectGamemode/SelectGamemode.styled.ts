import { RiTimerLine } from 'react-icons/ri'
import { GiRetroController } from 'react-icons/gi'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 85vh;
  margin: auto;
  width: 1400px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 715px) {
    width: 100%;
  }

  @media (max-width: 645px) {
    margin-top: 50px;
    flex-direction: column;
  }
`

export const GamemodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 600px;
  height: 500px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 0px 12px #181818;
  background-color: ${(props) => props.theme.profileBackground};

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
