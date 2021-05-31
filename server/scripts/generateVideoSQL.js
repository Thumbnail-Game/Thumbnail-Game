// const fetchVideoInfo = require('updated-youtube-info')
const fs = require('fs')
const youtubesearchapi = require('youtube-search-api')
const fetchVideoInfo = require('updated-youtube-info')

const words = require('./words')

let queryString = ''
const getData = async () => {
  //  store titles in case of duplicate
  const urls = []

  for (const word of words) {
    let data
    try {
      data = await youtubesearchapi.GetListByKeyword(word, false)
    } catch (err) {
      console.log(err)
      continue
    }

    const vidIds = []
    for (const item of data.items.splice(0, 2)) {
      vidIds.push(item.id)
    }

    for (const id of vidIds) {
      let data
      try {
        data = await fetchVideoInfo(id)
      } catch (err) {
        console.log(err)
        continue
      }

      //  duplicate
      if (urls.includes(data.url)) continue
      urls.push(data.url)

      console.log(` 
              values(
                  ${data.title},
                  ${data.thumbnailUrl},
                  ${data.views},
                  ${data.datePublished},
                  ${data.channelId},
                  ${data.url}`)

      for (let i = 0; i < data.title.length; i++) {
        if (data.title[i] === "'") {
          data.title = data.title.slice(0, i) + "'" + data.title.slice(i)
          i++
        }
      }

      queryString += `insert into Videos (title, thumbnail, views, url, date_published, channel_id) values ('${data.title}', '${data.thumbnailUrl}', ${data.views}, '${data.datePublished}', '${data.channelId}', '${data.url}');\n`
    }
  }
  console.log('running query runner')
  fs.writeFile('sql.txt', queryString, (err) => console.log(err))
}

getData()
