import { useState, useEffect } from 'react'

import { GetGamesByUserQuery } from '../../../generated/graphql'
import { getAchievements } from '../../../util/getAchievements'

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
  }, [])

  console.log(achievements)

  return (
    <>
      {achievements &&
        Array.isArray(achievements) &&
        achievements.map((achievement: Achievement, i: number) => (
          <div key={i}>{achievement.title}</div>
        ))}
    </>
  )
}
