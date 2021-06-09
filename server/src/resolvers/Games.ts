import { Arg, Resolver, Mutation, Query } from 'type-graphql'
import { getConnection } from 'typeorm'

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
    console.log('18')
    try {
      console.log('reached')
      await getConnection().createQueryBuilder().insert().into(Games).values([
        {
          userId,
          score,
        },
      ])
    } catch (err) {
      return null
    }

    return score
  }
}
