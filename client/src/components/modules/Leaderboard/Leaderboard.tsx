import { useState, useEffect, useContext } from 'react'
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
  level?: string
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

        tempLeaderboardUser.topScore = matchingUser.highScore
        tempLeaderboardUser.scoreDate = matchingUser.date

        Array.isArray(tempLeaderboardUsers) &&
          tempLeaderboardUsers.push(tempLeaderboardUser)
      }

<<<<<<< HEAD
    return (
        <>
            <Styled.Component>
                <Styled.Leaderboard></Styled.Leaderboard>
                {usersData && <Search users={usersData} />}
            </Styled.Component>
            <Styled.Background />
        </>
    )
}
=======
      console.log(tempLeaderboardUsers)
      setLeaderboardUsers(tempLeaderboardUsers)
    }
  }, [usersData, highscoresData])

  return (
    <>
      <Styled.Component>
        {usersData && <Search users={usersData} />}
      </Styled.Component>
      <Styled.Background />
    </>
  )
}
>>>>>>> f2912c961b4f58df68b5dc438922870b87ce187f
