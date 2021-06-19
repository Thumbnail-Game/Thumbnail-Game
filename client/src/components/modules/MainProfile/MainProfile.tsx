import { useState, useEffect } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

import {
  GetGamesByUserQuery,
  GetUserByDisplayNameQuery,
  useGetGamesQuery,
} from '../../../generated/graphql'
import { Achievements } from '../../elements/index'
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

  const [allGames] = useGetGamesQuery()
  const allGamesData = allGames && allGames.data

  console.log(allGamesData)

  useEffect(() => {
    //  calculate level by total score
    if (gamesData && gamesData.getGamesByUser) {
      let totalScore = gamesData.getGamesByUser.length

      setPercent((totalScore % 10) * 10)
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
              {percent && (
                <Styled.PercentText>{Math.floor(percent)}%</Styled.PercentText>
              )}
            </Styled.ProgressContainer>
            <Styled.LevelCircle>
              {level && <div>{Math.floor(level)}</div>}
            </Styled.LevelCircle>
          </Styled.InnerProgressRow>
        </Styled.LevelContainer>
        <Achievements gamesData={gamesData} />
      </Styled.RightContainer>
    </Styled.Wrapper>
  )
}
