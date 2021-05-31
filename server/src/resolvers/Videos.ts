import {
  Resolver,
  //   Mutation,
  //   Arg,
  //   Field,
  // Ctx,
  //   ObjectType,
  Query,
  // FieldResolver,
  // Root,
} from 'type-graphql'
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
}
