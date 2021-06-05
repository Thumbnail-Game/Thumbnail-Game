import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'

const Home: React.FC = () => {
  const router = useRouter()

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

export default Home
