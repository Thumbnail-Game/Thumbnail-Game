export const getAchievements = (numGames: number, topScore: number) => {
  const achievements = []
  if (numGames >= 1) {
    achievements.push({
      title: 'Newbie',
      description: 'Played 1 game!',
      imageURL: '/images/play-achievement-1.png',
    })
  }
  if (numGames >= 25) {
    achievements.push({
      title: 'Novice',
      description: 'Played 25 games!',
      imageURL: '/images/play-achievement-25.png',
    })
  }
  if (numGames >= 100) {
    achievements.push({
      title: 'Experienced',
      description: 'Played 100 games!',
      imageURL: '/images/play-achievement-100.png',
    })
  }
  if (topScore >= 5) {
    achievements.push({
      title: 'Beginner',
      description: 'Scored 5 points in one game!',
      imageURL: '/images/score-achievement-5.png',
    })
  }
  if (topScore >= 20) {
    achievements.push({
      title: 'Pro',
      description: 'Scored 20 points in one game!',
      imageURL: '/images/score-achievement-20.png',
    })
  }
  if (topScore >= 1) {
    achievements.push({
      title: 'Master',
      description: 'Scored 40 points in one game!',
      imageURL: '/images/score-achievement-40.png',
    })
  }

  return achievements
}
