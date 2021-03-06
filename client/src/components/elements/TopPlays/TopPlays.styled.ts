import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 340px;
  height: 540px;
  text-align: left;
  border-radius: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: ${(props) => props.theme.profileBackground};

  @media (max-width: 710px) {
    display: none;
  }
`

export const Title = styled.div`
  width: 300px;
  font-family: 'Gothic Bold';
  font-size: 30px;
  margin-top: 15px;
  margin-left: 20px;
`

export const Label = styled.div`
  width: 290px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const DateScoreHeading = styled.div`
  font-family: 'Gothic Bold';
  font-size: 20px;
`

export const Divider = styled.div`
  width: 288px;
  height: 5px;
  background-color: red;
  border-radius: 3px;
  margin: auto;
  margin-top: 10px;
`

export const Plays = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const DateScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DateString = styled.div`
  font-family: 'Helvetica';
  font-size: 20px;
  margin-left: 22px;
`

export const EachPlay = styled.div`
  font-family: 'Helvetica';
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 40px;
`
