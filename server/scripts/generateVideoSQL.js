//   node --max-old-space-size=4096 generateVideoSQL.js
// const fetchVideoInfo = require('updated-youtube-info')
const fs = require('fs')
const youtubesearchapi = require('youtube-search-api')
const fetchVideoInfo = require('updated-youtube-info')

const { words2 } = require('./words')

const getData = async () => {
  const filename = 'sql3.txt'
  // fs.writeFile(filename, '', (err) => console.log(err))

  //  store titles in case of duplicate
  const urls = []

  for (const word of words2) {
    let data
    try {
      data = await youtubesearchapi.GetListByKeyword(word, false)
    } catch (err) {
      console.log(err)
      continue
    }

    const vidIds = []
    //  words 2 are words that should have more thumbnails in the database, use 10 items instead of 2
    for (const item of data.items.splice(0, 10)) {
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

      fs.appendFile(
        filename,
        `insert into Videos (title, thumbnail, views, date_published, channel_id, url) values ('${data.title}', '${data.thumbnailUrl}', ${data.views}, '${data.datePublished}', '${data.channelId}', '${data.url}');\n`,
        (err) => console.error(err)
      )
    }
  }
}

getData()
