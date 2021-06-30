import React, { useState, useEffect } from 'react'

import { GetGamesByUserQuery } from '../../../generated/graphql'
import * as Styled from './TopPlays.styled'

interface GameData {
  [index: number]: Game
}

interface Game {
  score: number
  date: string
}

interface ProfileChartProps {
  gamesData: GetGamesByUserQuery
  gamemode: string
}

export const TopPlays: React.FC<ProfileChartProps> = React.memo(
  ({ gamesData, gamemode }) => {
    const [gameData, setGameData] = useState<GameData>()

    useEffect(() => {
      if (gamesData && gamesData.getGamesByUser) {
        const userGames = gamesData.getGamesByUser

        let tempGameData = []
        for (let i = 0; i < userGames.length; i++) {
          if (userGames[i].gamemode === gamemode) {
            tempGameData[i] = {
              score: userGames[i].score,
              date: userGames[i].createdAt,
            }
          }
        }

        tempGameData = tempGameData.sort((a, b) => {
          return b.score - a.score
        })

        setGameData(tempGameData.splice(0, 9))
      }
    }, [gamemode, gamesData])

    return (
      <Styled.Wrapper>
        <Styled.Title>Top Plays</Styled.Title>
        <Styled.Label>
          <Styled.Component>Date</Styled.Component>
          <Styled.Component>Score</Styled.Component>
        </Styled.Label>
        <Styled.Divider />
        {gameData &&
          Array.isArray(gameData) &&
          gameData.map((game: Game, i: number) => (
            <Styled.DateScoreContainer key={i}>
              <Styled.DateString>
                {new Date(parseInt(game.date)).toDateString()}
              </Styled.DateString>
              <Styled.EachPlay key={i}>{game.score}</Styled.EachPlay>
            </Styled.DateScoreContainer>
          ))}
      </Styled.Wrapper>
    )
  }
)
