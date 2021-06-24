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
    {}
  )

  const router = useRouter()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value

    if ((document.getElementById('input')! as HTMLTextAreaElement).value !== "") {
      setMatchingUsers(
        users.users?.filter(
          (userObj) =>
            userObj.displayName.toLowerCase().indexOf(val.toLowerCase()) >= 0
        )
      )
    } else {
      setMatchingUsers({})
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Input
        id="input"
        placeholder="Search For Users"
        onChange={handleSearch}
        type="search"
        autoComplete="off"
      ></Styled.Input>
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
