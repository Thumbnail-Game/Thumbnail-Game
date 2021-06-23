import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

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
                <Styled.LeaderboardContainer>
                    <Styled.LeaderboardColumn>
                        <Styled.Leaderboard>
                            {leaderboardUsers &&
                                Array.isArray(leaderboardUsers) &&
                                leaderboardUsers.map((user: LeaderboardUser, i) => (
                                    <Styled.LeaderboardRow
                                        onClick={() => router.push(`/user/${user.displayName}`)}
                                    >
                                        <div>{user.displayName}</div>
                                        <div>{user.topScore}</div>
                                        <div>{user.scoreDate}</div>
                                    </Styled.LeaderboardRow>
                                ))}
                        </Styled.Leaderboard>
                    </Styled.LeaderboardColumn>
                    {usersData && <Search users={usersData} />}
                </Styled.LeaderboardContainer>
            </Styled.Wrapper>
            {/* <Styled.Background /> */}
        </>
    )
}