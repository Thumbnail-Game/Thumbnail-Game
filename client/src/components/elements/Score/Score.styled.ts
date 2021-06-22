import styled from 'styled-components'

export const ScoreWrapper = styled.div`
  background-color: ${(props) => props.theme.scoreBackground};
  width: 395px;
  text-align: center;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  font-family: 'Gothic Bold';
  margin-top: 13px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  top: 11px;
  right: 0;
  z-index: 2;
  padding: 10px 0px 10px 0px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  @media (max-width: 760px) {
    transform:scale(1.2);
    width:240px;
    margin-top: 10px;
    flex-direction:column;
    justify-content:space-between;
  }
`
export const CurrentScore = styled.div`
  font-size: 28px;
  color: ${(props) => props.theme.primaryText};
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

export const HighScore = styled.div`
  font-size: 28px;
  color: ${(props) => props.theme.primaryText};
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  @media (max-width: 760px) {
    font-size:24px;
  }
`
