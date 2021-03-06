import {
  Arg,
  Resolver,
  Mutation,
  Query,
  Int,
  ObjectType,
  Field,
} from 'type-graphql'
import { getConnection, IsNull, Not } from 'typeorm'

import { Games, LeaderboardGames, UserAccount } from '../entities/index'

@ObjectType()
class UserHighscoreResponse {
  @Field({ nullable: true })
  userId: number
  @Field({ nullable: true })
  highScore: number
  @Field({ nullable: true })
  date: Date
}

@Resolver()
export class GamesResolver {
  @Query(() => [Games], { nullable: true })
  async games(): Promise<Games[] | null> {
    const games = await Games.find({ take: 500 })

    if (!games) return null

    return games
  }

  @Query(() => Int, { nullable: true })
  async getTotalGames() {
    let numGames
    try {
      const numGamesObj = await getConnection().query(
        'SELECT COUNT(*) from games'
      )
      numGames = numGamesObj[0].count
    } catch (err) {
      console.log(err)
    }
    return numGames
  }

  @Mutation(() => Games, { nullable: true })
  async addGame(
    @Arg('score', () => Int) score: number,
    @Arg('userId', () => Int, { nullable: true }) userId: number,
    @Arg('gamemode', () => String, { nullable: true }) gamemode: string
  ): Promise<Games | null> {
    let game
    try {
      game = await Games.create({ score, userId, gamemode }).save()

      if (userId) {
        const user = await UserAccount.findOne({ id: userId })
        if (!user) {
          console.error(
            'Failed to add game to LeaderboardGames - User does not exists.'
          )
          return game
        }
        await LeaderboardGames.create({ score, user_id: user, gamemode }).save()
      }
    } catch (err) {
      console.log(err)
      return null
    }

    return game
  }

  @Query(() => [Games], { nullable: true })
  async getGamesByUser(
    @Arg('userId', () => Int) userId: number
  ): Promise<Games[] | null> {
    // many to one relationship; logging game will give all games from userId
    let games
    try {
      games = await Games.find({ userId })
    } catch (err) {
      console.log(err)
      return null
    }

    return games
  }

  //  highscores only count if game is a timed mode
  @Query(() => [UserHighscoreResponse], { nullable: true })
  async getUserHighscores(@Arg('userIds', () => [Int]) userIds: number[]) {
    const userHighScores = []
    for (const userId of userIds) {
      let games
      try {
        games = await Games.find({ userId })
      } catch (err) {
        console.log(err)
        continue
      }

      let highScore = 0
      let date
      for (const game of games) {
        if (game.gamemode === 'timed' && game.score > highScore) {
          highScore = game.score
          date = game.createdAt
        }
      }

      userHighScores.push({ userId, highScore, date })
    }

    return userHighScores
  }

  @Query(() => [LeaderboardGames])
  getLeaderboardHighscores() {
    return LeaderboardGames.find({
      where: { user_id: Not(IsNull()), gamemode: 'timed' },
      relations: ['user_id'],
      order: { score: 'DESC' },
      take: 1000,
    })
  }
}
