import { useEffect } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'

import { useGetVideosQuery } from '../generated/graphql'
import { createUrqlClient } from '../util/index'

const Home: NextPage = () => {
  const router = useRouter()

  //  get 10 random videos for the 3d homepage
  const [videos] = useGetVideosQuery({
    variables: {
      numVideos: 10,
    },
  })
  const videoData = videos && videos.data

  useEffect(() => {
    if (videos.data) console.log(videoData)
  }, [videoData])

  return (
    <>
      <div> This is the home page</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => router.push('/play')}
      >
        Click to go to play page
      </Button>
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Home)
