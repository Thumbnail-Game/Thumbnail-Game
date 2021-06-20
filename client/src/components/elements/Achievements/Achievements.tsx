import { useState, useEffect } from 'react'

import { GetGamesByUserQuery } from '../../../generated/graphql'
import { getAchievements } from '../../../util/getAchievements'
import * as Styled from './Achievements.styled'

interface Achievements {
  [index: number]: Achievement
}

interface Achievement {
  title: string
  description: string
  imageURL: string
}

interface AchievementsProps {
  gamesData: GetGamesByUserQuery
}

export const Achievements: React.FC<AchievementsProps> = ({ gamesData }) => {
  const [achievements, setAchievements] = useState<Achievements>([])

  useEffect(() => {
    if (gamesData && gamesData.getGamesByUser) {
      const numGames = gamesData.getGamesByUser.length
      let topScore = 0
      for (const game of gamesData.getGamesByUser) {
        if (game.score > topScore) topScore = game.score
      }

      const tempAchievements = getAchievements(numGames, topScore)
      setAchievements(tempAchievements)
    }
  }, [gamesData])

  return (
    <>
      <Styled.Title>Achievements</Styled.Title>
      <Styled.AchievementContainer>
        {achievements &&
          Array.isArray(achievements) &&
          achievements.map((achievement: Achievement, i: number) => (
            <Styled.ImageContainer key={i}>
              <Styled.AchievementImage
                alt={`achievement-${i}`}
                src={achievement.imageURL}
                isCrownImage={achievement.title === 'Thumbnail Master'}
              />
              <Styled.AchievementPopupContainer>
                <Styled.PopupTitle>{achievement.title}</Styled.PopupTitle>
                <Styled.PopupDescription>
                  {achievement.description}
                </Styled.PopupDescription>
              </Styled.AchievementPopupContainer>
            </Styled.ImageContainer>
          ))}
      </Styled.AchievementContainer>
    </>
  )
}
