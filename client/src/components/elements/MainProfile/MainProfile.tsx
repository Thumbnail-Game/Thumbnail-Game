import { useState, useEffect } from 'react'
import { LinearProgress } from '@material-ui/core'
import ProgressBar from '@ramonak/react-progress-bar'

import {
  GetGamesByUserQuery,
  GetUserByDisplayNameQuery,
} from '../../../generated/graphql'
import * as Styled from './MainProfile.styled'

interface ProfileChartProps {
  userData: GetUserByDisplayNameQuery
  gamesData: GetGamesByUserQuery
}

export const MainProfile: React.FC<ProfileChartProps> = ({
  userData,
  gamesData,
}) => {
  const [level, setLevel] = useState<number>(0)
  const [percent, setPercent] = useState<number>(0)

  useEffect(() => {
    //  calculate level by total score
    if (gamesData && gamesData.getGamesByUser) {
      let totalScore = 0
      for (const gameObj of gamesData.getGamesByUser) {
        totalScore += gameObj.score
      }

      //  10 points of exp for level
      setPercent(
        (Math.abs(totalScore / 10) - Math.floor(totalScore / 10)) * 100
      )
      setLevel(totalScore / 10)
    }
  }, [gamesData])

  return (
    <Styled.Wrapper>
      <Styled.LeftContainer>
        <Styled.Name>{userData?.userByDisplayName?.displayName}</Styled.Name>
      </Styled.LeftContainer>
      <Styled.MiddleContainer></Styled.MiddleContainer>
      <Styled.RightContainer>
        <Styled.LevelContainer>
          <Styled.LevelText>Level</Styled.LevelText>
          <Styled.InnerProgressRow>
            <Styled.ProgressContainer>
              <ProgressBar
                completed={percent}
                bgColor="#8AE37C"
                borderRadius="50px"
                isLabelVisible={false}
                height="10px"
              />
              {percent && <Styled.PercentText>{percent}%</Styled.PercentText>}
            </Styled.ProgressContainer>
            <Styled.LevelCircle>
              {level && <div>{Math.floor(level)}</div>}
            </Styled.LevelCircle>
          </Styled.InnerProgressRow>
        </Styled.LevelContainer>
      </Styled.RightContainer>
    </Styled.Wrapper>
  )
}
