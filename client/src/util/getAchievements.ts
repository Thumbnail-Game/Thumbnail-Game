export const getAchievements = (
  numGames: number,
  topScore: number,
  numDailyChallenges: number
) => {
  const achievements = []
  if (numGames >= 1) {
    achievements.push({
      title: 'Newbie',
      description: 'Played 1 game!',
      imageURL: '/images/play-achievement-1.png',
    })
  } else {
    achievements.push({
      description: 'Play 1 game to unlock this achievement',
      imageURL: '/images/play-achievement-blank.png',
    })
  }
  if (numGames >= 25) {
    achievements.push({
      title: 'Novice',
      description: 'Played 25 games!',
      imageURL: '/images/play-achievement-25.png',
    })
  } else {
    achievements.push({
      description: 'Play 25 games to unlock this achievement',
      imageURL: '/images/play-achievement-blank.png',
    })
  }
  if (numGames >= 100) {
    achievements.push({
      title: 'Experienced',
      description: 'Play 100 games!',
      imageURL: '/images/play-achievement-100.png',
    })
  } else {
    achievements.push({
      description: 'Play 100 games to unlock this achievement.',
      imageURL: '/images/play-achievement-blank.png',
    })
  }
  if (topScore >= 5) {
    achievements.push({
      title: 'Beginner',
      description: 'Scored 5 points in one game!',
      imageURL: '/images/score-achievement-5.png',
    })
  } else {
    achievements.push({
      description: 'Score 5 points to unlock this achievement',
      imageURL: '/images/score-achievement-blank.png',
    })
  }
  if (topScore >= 20) {
    achievements.push({
      title: 'Pro',
      description: 'Scored 20 points in one game!',
      imageURL: '/images/score-achievement-20.png',
    })
  } else {
    achievements.push({
      description: 'Score 20 points to unlock this achievement',
      imageURL: '/images/score-achievement-blank.png',
    })
  }
  if (topScore >= 40) {
    achievements.push({
      title: 'Master',
      description: 'Scored 40 points in one game!',
      imageURL: '/images/score-achievement-40.png',
    })
  } else {
    achievements.push({
      description: 'Score 40 points to unlock this achievement',
      imageURL: '/images/score-achievement-blank.png',
    })
  }
  if (numDailyChallenges >= 1) {
    achievements.push({
      title: 'Daily Player I',
      description: 'Completed a daily achievement!',
      imageURL: '/images/daily-achievement-1.png',
    })
  } else {
    achievements.push({
      description: 'Complete a daily challenge to unlock this achievement',
      imageURL: '/images/daily-achievement-blank.png',
    })
  }
  if (numDailyChallenges >= 5) {
    achievements.push({
      title: 'Daily Player II',
      description: 'Completed 5 daily achievements!',
      imageURL: '/images/daily-achievement-5.png',
    })
  } else {
    achievements.push({
      description: 'Complete 5 daily challenges to unlock this achievement',
      imageURL: '/images/daily-achievement-blank.png',
    })
  }
  if (numDailyChallenges >= 10) {
    achievements.push({
      title: 'Daily Player III',
      description: 'Completed 10 daily achievements!',
      imageURL: '/images/daily-achievement-10.png',
    })
  } else {
    achievements.push({
      description: 'Complete 10 daily challenges to unlock this achievement',
      imageURL: '/images/daily-achievement-blank.png',
    })
  }

  return achievements
}
