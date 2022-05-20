import { getConnection } from 'typeorm'

import { Videos } from '../entities/index'
const fetchVideoInfo = require('updated-youtube-info')

export const updateAllVideoViews = async () => {
  console.log('updating all video views')
  const repository = getConnection().getRepository(Videos)
  const videos: any = await repository.find()

  for (const video of videos) {
    try {
      const parseIndex = video.url.indexOf('=')
      const videoId = video.url.substring(parseIndex + 1)
      const videoInfo = await fetchVideoInfo(videoId)
      video.views = videoInfo.views
      console.log(video.views)
      await repository.save(video)
    } catch (err) {
      console.log(err)
    }
  }
}
