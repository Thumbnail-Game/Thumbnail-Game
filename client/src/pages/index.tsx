import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'

import { useGetVideosQuery } from '../generated/graphql'
import { createUrqlClient } from '../util/index'
import { Home3D } from '../components/elements/index'

const Home: NextPage = () => {
  const router = useRouter()

  //  get 10 random videos for the 3d homepage
  const [videos] = useGetVideosQuery({
    variables: {
      numVideos: 10,
    },
  })
  const videoData = videos && videos.data

  return (
    <>
      {videoData && (<Home3D videos={videoData} />)}
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
