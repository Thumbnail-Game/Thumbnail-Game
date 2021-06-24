import { useState, useEffect } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import {
  GetGamesByUserQuery,
  GetUserByDisplayNameQuery,
  useGetGamesQuery,
} from '../../../generated/graphql'
import { Achievements } from '../../elements/index'
import * as Styled from './MainProfile.styled'
import Moment from 'moment'
import Skeleton from '@material-ui/lab/Skeleton';

interface ProfileChartProps {
  userData: GetUserByDisplayNameQuery
  gamesData: GetGamesByUserQuery
  gamemode: string
  handleToggleGamemode: () => void
}

export const MainProfile: React.FC<ProfileChartProps> = ({
  userData,
  gamesData,
  gamemode,
  handleToggleGamemode,
}) => {
  const [level, setLevel] = useState<number>(0)
  const [percent, setPercent] = useState<number>(0)
  const [percentile, setPercentile] = useState<string>('')

  const [allGames] = useGetGamesQuery()
  const allGamesData = allGames && allGames.data

  useEffect(() => {
    //  calculate the percentile of the user
    if (
      gamesData &&
      gamesData.getGamesByUser &&
      allGamesData &&
      allGamesData.games
    ) {
      const filteredAllGamesData = allGamesData.games.filter(
        (game) => game.gamemode === gamemode
      )
      //  turn gamesObject into array of scores for all users
      const allScores: number[] = []
      for (let i = 0; i < filteredAllGamesData.length; i++) {
        allScores[i] = filteredAllGamesData[i].score
      }

      allScores.sort((a, b) => {
        return a - b
      })

      //  get the top score to calculate percentile
      let topScore = 0
      for (const game of gamesData.getGamesByUser) {
        if (game.gamemode === gamemode && game.score > topScore) {
          topScore = game.score
        }
      }

      let index = allScores.indexOf(topScore)
      if (index < 0) {
        index = allScores.length
      }

      let percentile: number = Math.round((index / allScores.length) * 100)

      let finalPercentile: string

      if (percentile % 10 === 1) {
        finalPercentile = percentile + 'st'
      } else if (percentile % 10 === 2) {
        finalPercentile = percentile + 'nd'
      } else if (percentile % 10 === 3) {
        finalPercentile = percentile + 'rd'
      } else {
        finalPercentile = percentile + 'th'
      }
      setPercentile(finalPercentile)
    }
  }, [gamemode, gamesData, allGames])

  useEffect(() => {
    if (gamesData && gamesData.getGamesByUser) {
      //  gamemode does not matter for calculating level
      let totalScore = gamesData.getGamesByUser.length

      const levelData = calculateLevel(totalScore, 1)
      setPercent(levelData?.percent)
      setLevel(levelData?.level)
    }
  }, [gamesData])

  const calculateLevel = (score: number, level: number): any => {
    let tempScore = level * 10 * 1.2
    if (score < tempScore) {
      let percentEXP = (score / tempScore) * 100
      let obj = { level: level, percent: Math.round(percentEXP) }
      return obj
    }

    level++
    return calculateLevel(score - tempScore, level)
  }

  return (
    <Styled.Wrapper>
      <Styled.Toggle onClick={handleToggleGamemode}>
        Toggle Gamemode
      </Styled.Toggle>
      <Styled.LeftContainer>
        <Styled.Name>{userData?.userByDisplayName?.displayName || <Skeleton variant="text" />}</Styled.Name>
        {userData && userData.userByDisplayName && (
          <Styled.AccountCreatedDate>
            User since{' '}
            {Moment(
              new Date(
                parseInt(userData.userByDisplayName.createdAt)
              ).toISOString()
            ).format('MM/DD/YYYY')}
          </Styled.AccountCreatedDate>
        )}
        <Styled.GamemodeTitle>
          {gamemode.charAt(0).toUpperCase() + gamemode.slice(1) || <Skeleton variant="text" />}
        </Styled.GamemodeTitle>
      </Styled.LeftContainer>
      <Styled.MiddleContainer>
        <Styled.Percentile
          isAbove50={
            parseInt(percentile.slice(0, percentile.length - 2)) >= 50
              ? true
              : false
          }
        >
          {percentile || <Skeleton variant="text" />}
        </Styled.Percentile>
        <Styled.PercentileLabel>percentile</Styled.PercentileLabel>
      </Styled.MiddleContainer>
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
                <Styled.PercentText>{Math.floor(percent) || <Skeleton variant="text" />}%</Styled.PercentText>
              )}
            </Styled.ProgressContainer>
            <Styled.LevelCircle>
              {level && <div>{Math.floor(level) || <Skeleton variant="text" />}</div>}
            </Styled.LevelCircle>
          </Styled.InnerProgressRow>
        </Styled.LevelContainer>
        <Achievements gamesData={gamesData} />
      </Styled.RightContainer>
    </Styled.Wrapper>
  )
}
