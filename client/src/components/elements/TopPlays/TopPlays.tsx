import { useState, useEffect } from 'react'
import {
  GetUserByDisplayNameQuery,
  useGetGamesByUserQuery,
} from '../../../generated/graphql'
import * as Styled from './TopPlays.styled'

interface ProfileChartProps {
  userData: GetUserByDisplayNameQuery
}

export const TopPlays: React.FC<ProfileChartProps> = ({ userData }) => {
  const [gameData, setGameData] = useState<number[]>()

  const [games] = useGetGamesByUserQuery({
    variables: { userId: userData!.userByDisplayName!.id },
  })

  useEffect(() => {
    if (games.data && games.data.getGamesByUser) {
      const allGames = games.data.getGamesByUser

      let tempGameData: number[] = []
      for (let i = 0; i < allGames.length; i++) {
        tempGameData[i] = allGames[i].score
      }
      tempGameData = tempGameData.sort((a, b) => {
        return b - a
      })
      setGameData(tempGameData.splice(0, 10))
    }
  }, [games])

  return (
    <Styled.Wrapper>
      <Styled.Title>Top Plays</Styled.Title>
      <Styled.Label>
        <Styled.Component>Lost To</Styled.Component>
        <Styled.Component>Score</Styled.Component>
      </Styled.Label>
      <Styled.Divider />
      {gameData &&
        gameData.map((score: number, i: number) => (
          <Styled.EachPlay key={i}>{score}</Styled.EachPlay>
        ))}
    </Styled.Wrapper>
  )
}
