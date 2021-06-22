import { useState } from 'react'
import { Input, StyledProps } from '@material-ui/core'

import { GetUsersQuery } from '../../../generated/graphql'
import * as Styled from './Search.styled'

interface User {
  [index: number]: {
    uid: string
    displayName: string
    email: string
  }
}

interface SearchProps {
  users: GetUsersQuery
}

export const Search: React.FC<SearchProps> = ({ users }) => {
  const [matchingUsers, setMatchingUsers] = useState<User>()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value
    setMatchingUsers(
      users.users?.filter(
        (userObj) =>
          userObj.displayName.toLowerCase().indexOf(val.toLowerCase()) >= 0
      )
    )
  }

  return (
    <>
      <Styled.Input
        placeholder="input field"
        color="primary"
        onChange={handleSearch}
      />
      {matchingUsers &&
        Array.isArray(matchingUsers) &&
        matchingUsers.map((user, i) => <div key={i}>{user.displayName}</div>)}
    </>
  )
}
