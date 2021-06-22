import { useContext } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { useGetUsersQuery } from '../generated/graphql'

import { SignedInContext } from '../providers/AppProvider'
import { createUrqlClient } from '../util'
import { Nav } from '../components/modules/index'
import { Search } from '../components/elements/index'

const SearchPage: NextPage = () => {
  const [users] = useGetUsersQuery()
  const usersData = users && users.data

  const { signedIn } = useContext(SignedInContext)

  return (
    <>
      <Nav signedIn={signedIn} />
      {usersData && <Search users={usersData} />}
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(SearchPage)
