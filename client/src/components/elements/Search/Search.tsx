import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { GetUsersQuery } from '../../../generated/graphql'
import * as Styled from './Search.styled'

interface Users {
  [index: number]: User
}

interface User {
  uid: string
  displayName: string
  email: string
}

interface SearchProps {
  users: GetUsersQuery
}

export const Search: React.FC<SearchProps> = ({ users }) => {
  const [matchingUsers, setMatchingUsers] = useState<Users | undefined | null>(
    users
  )

  const router = useRouter()

  useEffect(() => {
    if (users.users) {
      setMatchingUsers(users.users)
    }
  }, [users])

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
    <Styled.Wrapper>
      <Styled.Input
        placeholder="Search For Users"
        onChange={handleSearch}
        type="search"
      />
      <Styled.SearchContainer>
        {matchingUsers &&
          Array.isArray(matchingUsers) &&
          matchingUsers.map((user: User, i) => (
            <Styled.UserContainer
              key={i}
              onClick={() =>
                router.replace(`/user/${user.displayName}`, undefined, {
                  shallow: true,
                })
              }
            >
              {user.displayName}
            </Styled.UserContainer>
          ))}
      </Styled.SearchContainer>
    </Styled.Wrapper>
  )
}
