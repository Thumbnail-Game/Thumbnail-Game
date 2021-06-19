export const getAchievements = (numGames: number, topScore: number) => {
  const achievements = []
  if (numGames >= 1) {
    achievements.push({
      title: 'Getting started',
      description: 'You played your first game!',
      imageURL: '',
    })
  }
  if (numGames >= 25) {
    achievements.push({
      title: 'Experienced',
      description: 'You played 25 games!',
      imageURL: '',
    })
  }
  if (numGames >= 100) {
    achievements.push({
      title: 'Very Experienced',
      description: 'You played 100 games!',
      imageURL: '',
    })
  }
  if (topScore >= 5) {
    achievements.push({
      title: 'Thumbnail Amateur',
      description: 'You scored 5 points in one game!',
      imageURL: '',
    })
  }
  if (topScore >= 15) {
    achievements.push({
      title: 'Thumbnail Pro',
      description: 'You scored 15 points in one game!',
      imageURL: '',
    })
  }
  if (topScore >= 25) {
    achievements.push({
      title: 'Thumbnail Master',
      description: 'You scored 25 points in one game!',
      imageURL: '',
    })
  }

  return achievements
}
