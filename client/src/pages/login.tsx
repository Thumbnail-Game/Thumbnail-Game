import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

// import { Nav } from '../components/modules/index'
import { createUrqlClient } from '../util'
import { LoginForm } from '../components/modules/index'

const Login: NextPage = () => {
  return <LoginForm />
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Login)
