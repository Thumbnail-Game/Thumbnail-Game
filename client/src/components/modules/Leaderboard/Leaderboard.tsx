import { useState, useEffect, useContext } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { useGetUsersQuery, useGetGamesQuery, useGetUserHighscoresQuery } from '../../../generated/graphql'

import { SignedInContext } from '../../../providers/AppProvider'
import { createUrqlClient } from '../../../util'
import { Nav } from '../../../components/modules/index'
import { Search } from '../../../components/elements/index'
import * as Styled from './Leaderboard.styled'

interface LeaderboardUsers {
    [index: number]: LeaderboardUser
}

interface LeaderboardUser {
    displayName: string,
    topScore: string,
    scoreDate: string,
    level: string
}

export const Leaderboard: React.FC = () => {
    const [leaderboardUsers, setLeaderboardUsers] = useState<LeaderboardUsers>([])
    const [userIds, setUserIds] = useState<number>([])

    const [users] = useGetUsersQuery()
    const usersData = users && users.data

    const [games] = useGetGamesQuery()
    const gamesData = games && games.data

    const [highscores] = useGetUserHighscoresQuery({ variables: { userIds: [] } })
    const highscoresData = highscores && highscores.data

    const { signedIn } = useContext(SignedInContext)

    useEffect(() => {
        if (usersData && usersData.users) {

        }
    }, [users])

    useEffect(() => {

    }, [usersData, gamesData])

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