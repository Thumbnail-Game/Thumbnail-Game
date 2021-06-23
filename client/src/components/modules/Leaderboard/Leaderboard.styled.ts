import styled, { keyframes }  from 'styled-components'

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
  margin:auto;
  top:20px;
  bottom:0;
  left:0;
  right:0;
  z-index: 2;
  width:1120px;
  height:700px;
  display:flex;
  justify-content:space-around;
  background-color:#424242;
  border-radius:15px;

  animation-name: ${LeaderboardIntro};
  animation-duration:300ms;
  animation-fill-mode:forwards;
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
  background-color: #606060;
`

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin:auto;
  margin-top:10px;
  cursor: pointer;
  background-color: #353535;
  width:91%;
  padding-left:3%;
  padding-right:3%;
  border-radius:6px;
  font-size: 17px;
  font-family:"Gothic Bold";
`

export const LabelContainer = styled.div`
  width:97%;
  margin:auto;
  margin-top:15px;
`

export const Label = styled.div`
  font-size:35px;
  font-family:"Gothic Bold";
`

export const ColumnNamesContainer = styled.div`
  width:95%;
  margin:auto;
  margin-top:20px;
  height:30px;
  display:flex;
  justify-content:space-between;
  margin-bottom:-5px;
`

export const ColumnNames = styled.div`
  font-size:15px;
  font-family:"Gothic Bold";
`
