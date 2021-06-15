import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { withUrqlClient } from 'next-urql'

import { createUrqlClient } from '../../util'

const User: NextPage = () => {
    const router = useRouter()
    const { username } = router.query

    return <div>{username}</div>
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(User)

