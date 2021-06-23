import { useState, useEffect, useContext } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { useGetUsersQuery, useGetGamesQuery } from '../../../generated/graphql'

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
    const [users] = useGetUsersQuery()
    const usersData = users && users.data

    const [games] = useGetGamesQuery()
    const gamesData = games && games.data

    const { signedIn } = useContext(SignedInContext)

    useEffect(() => {
        //  create an ordered list of top players' and their best games
        // console.log(usersData)
        // console.log(gamesData)
        // if (usersData && usersData.users && gamesData && gamesData.games) {
        //     const tempLeaderboardUsers: LeaderboardUsers = []

        //     const userIds: number[] = []
        //     usersData.users.forEach(user => userIds.push(user.id))

        //     for (const userId of userIds) {
        //         let highScore = 0;
        //         let gameDate = ''
        //         console.log('userId: ', userId)
        //         const userGames = gamesData.games.filter(game => game === userId)
        //         console.log(userGames)

        //         for (const game of userGames) {
        //             if (game.score > highScore && game.gamemode === 'timed') {
        //                 highScore = game.score
        //                 gameDate = game.createdAt
        //             }
        //         }
        //         console.log(highScore);
        //         console.log(gameDate);
        //     }
        // }
    }, [usersData, gamesData])

    return (
        <>
            <Styled.Component>
                {usersData && <Search users={usersData} />}
            </Styled.Component>
            <Styled.Background />
        </>
    )
}