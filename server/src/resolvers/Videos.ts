import {
  Resolver,
  Mutation,
  //   Arg,
  //   Field,
  // Ctx,
  //   ObjectType,
  Query,
  // FieldResolver,
  // Root,
} from 'type-graphql'
import { getConnection } from 'typeorm'
// import { MyContext } from '../types'

import { Videos } from '../entities/index'

@Resolver(Videos)
export class VideoResolver {
  @Query(() => [Videos], { nullable: true })
  videos() {
    const videos = Videos.find()
    if (!videos) return null

    return videos
  }

  @Query(() => [Videos], { nullable: true })
  async twoVideos() {
    const videos = await getConnection()
      .createQueryBuilder()
      .select('videos')
      .from(Videos, 'videos')
      .orderBy('RANDOM()')
      .limit(2)
      .getMany()

    if (!videos) return null

    return videos
  }

  @Mutation(() => [Videos], { nullable: true })
  invalidateVideos() {
    return null
  }
}
