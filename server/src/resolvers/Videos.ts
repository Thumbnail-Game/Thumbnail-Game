import { Arg, Int, Resolver, Mutation, Query } from 'type-graphql'
import { getConnection } from 'typeorm'

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
  async twoVideos(@Arg('videoIds', () => [Int]) videoIds: number[]) {
    //  return videos that do not match videoIds (do not want repeats)
    let tempSql = ''
    for (let i = 0; i < videoIds.length; i++) {
      tempSql += ` id !=${videoIds[i]} `
      if (i !== videoIds.length - 1) tempSql += 'and'
    }

    let videos
    try {
      if (videoIds.length > 0) {
        videos = await getConnection().query(
          `select * from videos where ${tempSql} order by random() limit 2;`
        )
      } else {
        videos = await getConnection().query(
          `select * from videos order by random() limit 2;`
        )
      }
    } catch (err) {
      //  TODO: return field error instead
      console.log(err)
      return null
    }

    if (!videos) return null

    return videos
  }

  @Query(() => [Videos], { nullable: true })
  async getVideos(@Arg('numVideos', () => Int) numVideos: number) {
    let videos
    try {
      videos = await getConnection().query(
        `select * from videos order by random() limit ${numVideos};`
      )
    } catch (err) {
      //  TODO: return field error instead
      console.log(err)
      return null
    }

    if (!videos) return null

    return videos
  }

  @Mutation(() => [Videos], { nullable: true })
  invalidateVideos() {
    return null
  }
}
