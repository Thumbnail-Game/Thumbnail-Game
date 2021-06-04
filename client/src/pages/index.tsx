import { useEffect } from 'react'
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from '../util/createURQLClient'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'

import { ThemeToggle } from '../components/elements/index'

import { Thumbnail } from '../components/modules/index'


const Home: React.FC = () => {
  const router = useRouter()

  useEffect(() => { }, [])

  return (
    <>
      <ThemeToggle />
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

interface StyledUserContainerProps {
  largerThan500px: boolean
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Home)
