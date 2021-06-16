import { Arg, Resolver, Mutation, Query, Int } from 'type-graphql'

import { Games } from '../entities/index'

@Resolver()
export class GamesResolver {
  @Query(() => [Games], { nullable: true })
  videos() {
    const games = Games.find()
    if (!games) return null

    return games
  }

  @Mutation(() => Games, { nullable: true })
  async addGame(
    @Arg('score', () => Int) score: number,
    @Arg('userId', () => Int, { nullable: true }) userId: number | null
  ): Promise<Games | null> {
    let game
    try {
      game = await Games.create({ score, userId }).save()
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
    console.log(games)

    return games
  }
}
