import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Moment from 'react-moment'
import Skeleton from '@material-ui/lab/Skeleton'

import {
  useGetUsersQuery,
  useGetUserHighscoresQuery,
} from '../../../generated/graphql'
import { Search } from '../../../components/elements/index'
import * as Styled from './Leaderboard.styled'
import { useTransition } from 'react-spring'

interface LeaderboardUsers {
  [index: number]: LeaderboardUser
}

interface LeaderboardUser {
  displayName?: string
  topScore?: number
  scoreDate?: string
}

interface ShowLeaderboardProps {
  toggleLeaderboard: () => void
}

export const Leaderboard: React.FC<ShowLeaderboardProps> = ({
  toggleLeaderboard,
}) => {
  const [leaderboardUsers, setLeaderboardUsers] = useState<LeaderboardUsers>([])
  const [userIds, setUserIds] = useState<number[]>([])

  const [users] = useGetUsersQuery()
  const usersData = users && users.data

  const [highscores] = useGetUserHighscoresQuery({ variables: { userIds } })
  const highscoresData = highscores && highscores.data

  const router = useRouter()

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
      let tempLeaderboardUsers: LeaderboardUsers = []

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

      //  sort and take the top 100
      if (Array.isArray(tempLeaderboardUsers)) {
        tempLeaderboardUsers = tempLeaderboardUsers
          .sort((a: any, b: any) => {
            return b.topScore - a.topScore
          })
          .slice(0, 99)
      }
      setLeaderboardUsers(tempLeaderboardUsers)
    }
  }, [usersData, highscoresData])

  const renderSkeletonLoaders = () => {
    const fields: JSX.Element[] = []
    for (let i = 1; i < 10; i++) {
      fields.push(
        <Skeleton
          style={{
            margin: 'auto',
            marginBottom: '10px',
            borderRadius: '7px',
          }}
          key={i}
          variant="rect"
          width={630}
          height={50}
          animation="wave"
        />
      )
    }

    return fields
  }

  return (
    <>
      <Styled.Wrapper>
        <Styled.Leaderboard>
          <Styled.LabelContainer>
            <Styled.Label>Leaderboard</Styled.Label>
            <Styled.ColumnNamesContainer>
              <Styled.ColumnNames>Username</Styled.ColumnNames>
              <Styled.ColumnNames>Highscore</Styled.ColumnNames>
              <Styled.ColumnNames>Date</Styled.ColumnNames>
            </Styled.ColumnNamesContainer>
          </Styled.LabelContainer>
          <Styled.InfoWrapper>
            {!users.fetching &&
            leaderboardUsers &&
            Array.isArray(leaderboardUsers)
              ? leaderboardUsers.map((user: LeaderboardUser, i) => (
                  <Styled.PlayerInfo
                    onClick={() => router.push(`/user/${user.displayName}`)}
                    key={i}
                  >
                    {user.displayName && (
                      <Styled.Username>
                        {user.displayName.length > 18
                          ? user.displayName.slice(0, 18) + '...'
                          : user.displayName}
                      </Styled.Username>
                    )}
                    <Styled.Highscore>{user.topScore}</Styled.Highscore>
                    <Styled.Date>
                      <Moment format="MM/DD/YYYY" interval={0}>
                        {user.scoreDate}
                      </Moment>
                    </Styled.Date>
                  </Styled.PlayerInfo>
                ))
              : renderSkeletonLoaders()}
          </Styled.InfoWrapper>
        </Styled.Leaderboard>
        {usersData ? (
          <Search users={usersData} />
        ) : (
          <Skeleton
            style={{
              margin: '25px 55px 0px 30px',
              borderRadius: '12px',
            }}
            variant="rect"
            width={330}
            height={56}
            animation="wave"
          />
        )}
      </Styled.Wrapper>
      <Styled.Background onClick={toggleLeaderboard} />
    </>
  )
}
