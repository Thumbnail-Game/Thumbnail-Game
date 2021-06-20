export const getAchievements = (numGames: number, topScore: number) => {
  const achievements = []
  if (numGames >= 1) {
    achievements.push({
      title: 'Newbie',
      description: 'You played your first game!',
      imageURL: '/images/play-achievement-1.png',
    })
  }
  if (numGames >= 25) {
    achievements.push({
      title: 'Novice',
      description: 'You played 25 games!',
      imageURL: '/images/play-achievement-25.png',
    })
  }
  if (numGames >= 100) {
    achievements.push({
      title: 'Experienced',
      description: 'You played 100 games!',
      imageURL: '/images/play-achievement-100.png',
    })
  }
  if (topScore >= 5) {
    achievements.push({
      title: 'Beginner',
      description: 'You scored 5 points in one game!',
      imageURL: '/images/score-achievement-5.png',
    })
  }
  if (topScore >= 15) {
    achievements.push({
      title: 'Pro',
      description: 'You scored 15 points in one game!',
      imageURL: '/images/score-achievement-20.png',
    })
  }
  if (topScore >= 40) {
    achievements.push({
      title: 'Master',
      description: 'You scored 40 points in one game!',
      imageURL: '/images/score-achievement-40.png',
    })
  }

  return achievements
}