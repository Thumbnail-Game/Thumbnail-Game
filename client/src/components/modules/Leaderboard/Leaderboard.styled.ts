import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 2;
`

export const LeaderboardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 1480px;
  height: 750px;
  border-radius: 15px;
  margin: auto;
  margin-top: 50px;
  z-index: 2;
  background-color: blue;
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0.5;
  background-color: #111111;
`

export const LeaderboardColumn = styled.div`
  display: flex;
  width: 1100px;
  background-color: purple;
`

export const Leaderboard = styled.div`
  margin: auto;
  width: 900px;
  height: 600px;
  border-radius: 15px;
  background-color: orange;
`

export const LeaderboardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
  background-color: red;
`
