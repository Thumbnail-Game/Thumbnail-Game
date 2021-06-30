import styled, { keyframes } from 'styled-components'

const LeaderboardIntro = keyframes`
  0%{
    top:-1000px;
  }
  100%{
    top:20px;
  }
`

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  margin: auto;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  width: 1120px;
  height: 700px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.profileBackground};

  animation-name: ${LeaderboardIntro};
  animation-duration: 300ms;
  animation-fill-mode: forwards;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 700px;
    height: 1000px;
  }

  @media (max-width: 370px) {
    flex-direction: column;
    width: 98%;
    height: 800px;
  }
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0.6;
  background-color: #111111;
`

export const Leaderboard = styled.div`
  margin: auto;
  width: 650px;
  height: 93%;
  border-radius: 9px;

  @media (max-width: 370px) {
    width: 98%;
  }
`

export const InfoWrapper = styled.div`
  width: 650px;
  height: 530px;
  overflow-y: scroll;

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
    height: 450px;
    margin-bottom: 15px;
  }

  @media (max-width: 370px) {
    width: 100%;
    overflow-x: hidden;
  }
`

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  width: 91%;
  padding-left: 3%;
  padding-right: 3%;
  border-radius: 6px;
  font-size: 17px;
  font-family: 'Gothic Bold';
  background-color: ${(props) => props.theme.scoreBackground};

  @media (max-width: 370px) {
    width: 98%;
  }
`

export const Username = styled.div`
  width: 39%;
  overflow: hidden;
`

export const Highscore = styled.div`
  text-align: center;
  width: 33%;
  overflow: hidden;
`

export const Date = styled.div`
  text-align: right;
  width: 33%;
  overflow: hidden;
`

export const LabelContainer = styled.div`
  width: 97%;
  margin: auto;
  margin-top: 15px;
`

export const Label = styled.div`
  font-size: 35px;
  font-family: 'Gothic Bold';
`

export const ColumnNamesContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: -5px;
`

export const ColumnNames = styled.div`
  font-size: 15px;
  font-family: 'Gothic Bold';
`
