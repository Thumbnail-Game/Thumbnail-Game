import { useState, useEffect } from 'react'
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
        <Styled.Name>{userData!.userByDisplayName!.displayName}</Styled.Name>
      </Styled.LeftContainer>
      <Styled.MiddleContainer></Styled.MiddleContainer>
      <Styled.RightContainer>
        {level && <div>{Math.floor(level)}</div>}
        {percent && (
          <div>
            {percent}% to level {Math.floor(level) + 1}
          </div>
        )}
      </Styled.RightContainer>
    </Styled.Wrapper>
  )
}
