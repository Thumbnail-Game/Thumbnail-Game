import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Moment from 'react-moment';

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

interface ShowLeaderboardProps {
    toggleLeaderboard: () => void
}

export const Leaderboard: React.FC<ShowLeaderboardProps> = ({ toggleLeaderboard }) => {
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

            setLeaderboardUsers(tempLeaderboardUsers)
        }
    }, [usersData, highscoresData])

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
                    {leaderboardUsers &&
                        Array.isArray(leaderboardUsers) &&
                        leaderboardUsers.map((user: LeaderboardUser, i) => (
                            <Styled.PlayerInfo
                                onClick={() => router.push(`/user/${user.displayName}`)}
                            >
                                <div>{user.displayName}</div>
                                <div>{user.topScore}</div>
                                <Moment format="MM/DD/YYYY" interval={0}>{user.scoreDate}</Moment>
                            </Styled.PlayerInfo>
                        ))}
                </Styled.Leaderboard>
                {usersData && <Search users={usersData} />}
            </Styled.Wrapper>
            <Styled.Background onClick={toggleLeaderboard} />
        </>
    )
}