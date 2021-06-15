import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { withUrqlClient } from 'next-urql'

import { createUrqlClient } from '../../util'

const User = () => {
  const router = useRouter()

  //  username => query for id

  return <div>{router.query.user}</div>
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(User)
