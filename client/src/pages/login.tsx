import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import { createUrqlClient } from '../util/index'
import { LoginForm } from '../components/modules/index'

const Login: NextPage = () => {
  return (
    <LoginForm />
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Login)
