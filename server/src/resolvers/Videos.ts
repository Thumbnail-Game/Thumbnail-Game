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

    let videos = []
    try {
      if (videoIds.length > 0) {
        const video = await getConnection().query(
          `select * from videos where ${tempSql} order by random() limit 1;`
        )
        tempSql += ` and id != ${video[0].id} `
        videos.push(video[0])

        //  query for videos that are more than 200,000 views apart
        const video2 = await getConnection().query(
          `select * from videos where ${tempSql} 
          and views < ${parseInt(video[0].views) - 200000} or views > ${
            parseInt(video[0].views) + 200000
          }
          order by random() limit 1;`
        )
        videos.push(video2[0])
      } else {
        const video = await getConnection().query(
          `select * from videos order by random() limit 2;`
        )
        videos.push(video[0])

        //  query for videos that are more than 200,000 views apart
        const video2 = await getConnection().query(
          `select * from videos 
          where id != ${video[0].id} and views < ${
            parseInt(video[0].views) - 200000
          } or views > ${parseInt(video[0].views) + 200000}
          order by random() limit 1;`
        )
        videos.push(video2[0])
      }
    } catch (err) {
      //  TODO: return field error instead
      console.log(err)
      return null
    }

    if (videos.length === 0) return null

    console.log(videos)
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
