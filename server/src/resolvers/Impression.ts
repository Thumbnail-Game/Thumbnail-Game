import { Resolver, Mutation, Arg } from 'type-graphql'

import { Impressions, UserAccount, Videos } from '../entities/index'

@Resolver(Impressions)
export class ImpressionResolver {
  @Mutation(() => Boolean)
  async createImpression(
    @Arg('user_id', { nullable: true }) user_id: number,
    @Arg('video_id') video_id: number
  ) {
    try {
      const user = await UserAccount.findOne({ where: { id: user_id } })
      const video = await Videos.findOne({ where: { id: video_id } })

      await Impressions.create({ user_id: user, video_id: video }).save()
    } catch (err) {
      console.log(err)
      return false
    }
    return true
  }
}
