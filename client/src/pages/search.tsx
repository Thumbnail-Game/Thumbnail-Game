import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import {useGetUsersQuery } from '../generated/graphql'

import { createUrqlClient } from '../util'
import { Search } from '../components/elements/index'

const SearchPage: NextPage = () => {

  const [users] = useGetUsersQuery()
  const usersData = users && users.data

  return (
    <>
      {usersData && (<Search users={usersData} />)}
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(SearchPage)
