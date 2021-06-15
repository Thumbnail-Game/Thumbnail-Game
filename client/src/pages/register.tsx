import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'

import { createUrqlClient } from '../util'
import { RegisterForm } from '../components/modules/index'

const Register: NextPage = () => {
  return (
    <>
      <RegisterForm />
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Register)
