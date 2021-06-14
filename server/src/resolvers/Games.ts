import { Arg, Resolver, Mutation, Query } from 'type-graphql'
// import { getConnection } from 'typeorm'

import { Games } from '../entities/index'

// ObjectType()
// class Score {
//   @Field()
//   score: number
// }

@Resolver()
export class GamesResolver {
  @Query(() => [Games], { nullable: true })
  videos() {
    const games = Games.find()
    if (!games) return null

    return games
  }

  @Mutation(() => Games, { nullable: true })
  async addGame(@Arg('userId') userId: number, @Arg('score') score: number) {
    console.log('reached add game')
    try {
      await Games.create({ score, userId }).save()
    } catch (err) {
      console.log(err)
      return null
    }

    return score
  }

  @Query(() => Games, { nullable: true })
  async getGamesByUser(@Arg('userid') userId: number) {
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
