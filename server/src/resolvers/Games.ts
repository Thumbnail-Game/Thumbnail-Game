import { Arg, Resolver, Mutation, Query } from 'type-graphql'
import { getConnection } from 'typeorm'

import { Games } from '../entities/index'

@Resolver(Games)
export class GamesResolver {
    @Query(() => [Games], { nullable: true })
    videos() {
        const games = Games.find()
        if (!games) return null

        return games
    }

    @Mutation(() => Games, { nullable: true })
    async addGame(
        @Arg('userId') userId: number,
        @Arg('score') score: number,
    ) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Games)
            .values([{
                userId,
                score
            }])

        return 'Sucess'
    }
}
