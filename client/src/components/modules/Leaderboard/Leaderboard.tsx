import { useState, useEffect } from 'react'
import {
  useGetUsersQuery,
  useGetUserHighscoresQuery,
} from '../../../generated/graphql'

import { Search } from '../../../components/elements/index'
import * as Styled from './Leaderboard.styled'

interface LeaderboardUsers {
  [index: number]: LeaderboardUser
}

interface LeaderboardUser {
  displayName?: string
  topScore?: number
  scoreDate?: string
}

export const Leaderboard: React.FC = () => {
  const [leaderboardUsers, setLeaderboardUsers] = useState<LeaderboardUsers>([])
  const [userIds, setUserIds] = useState<number[]>([])

  const [users] = useGetUsersQuery()
  const usersData = users && users.data

  const [highscores] = useGetUserHighscoresQuery({ variables: { userIds } })
  const highscoresData = highscores && highscores.data

  useEffect(() => {
    if (usersData && usersData.users) {
      const tempUserIds: number[] = []
      for (const user of usersData.users) {
        tempUserIds.push(user.id)
      }
      setUserIds(tempUserIds)
    }
  }, [users])

  useEffect(() => {
    if (
      usersData &&
      usersData.users &&
      highscoresData &&
      highscoresData.getUserHighscores
    ) {
      //    construct a leaderboard user
      const tempLeaderboardUsers: LeaderboardUsers = []

      for (const user of usersData.users) {
        const tempLeaderboardUser: LeaderboardUser = {}
        tempLeaderboardUser.displayName = user.displayName

        //    get the corresponding highscore for the user
        const matchingUser = highscoresData.getUserHighscores.find(
          (userObj) => userObj.userId === user.id
        )
        if (!matchingUser || !matchingUser?.highScore || !matchingUser?.date) {
          continue
        }

        //  append the necessary fields
        tempLeaderboardUser.topScore = matchingUser.highScore
        tempLeaderboardUser.scoreDate = matchingUser.date

        Array.isArray(tempLeaderboardUsers) &&
          tempLeaderboardUsers.push(tempLeaderboardUser)
      }

      console.log(tempLeaderboardUsers)
      setLeaderboardUsers(tempLeaderboardUsers)
    }
  }, [usersData, highscoresData])

  return (
    <>
      <Styled.SearchContainer>
        {usersData && <Search users={usersData} />}
      </Styled.SearchContainer>
      <Styled.Background />
    </>
  )
}
