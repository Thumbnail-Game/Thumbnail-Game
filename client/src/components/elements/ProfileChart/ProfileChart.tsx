import { useEffect, useState } from 'react';
import { ChartOptions, ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useGetGamesByUserQuery, GetUserByDisplayNameQuery } from '../../../generated/graphql'
import { auth } from '../../../config/firebaseConfig'
import * as Styled from './ProfileChart.styled'

interface ProfileChartProps {
    userData: GetUserByDisplayNameQuery
}

export const ProfileChart: React.FC<ProfileChartProps> = ({ userData }) => {
    const [scores, setScores] = useState<number[]>()
    const [labels, setLabels] = useState<string[]>()

    const [games] = useGetGamesByUserQuery({ variables: { userId: userData!.userByDisplayName!.id } })

    useEffect(() => {
        const tempScores: number[] = []
        games.data?.getGamesByUser?.forEach(game => tempScores.push(game.score))
        setScores(tempScores)

        const tempLabels = new Array(tempScores.length).fill("");
        setLabels(tempLabels);
    }, [games])

    const data: ChartData = {
        labels: labels,
        datasets: [
            {
                label: 'Game',
                data: scores!,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    return (
        <Styled.Wrapper>
            <Line type="line" data={data} />
        </Styled.Wrapper>
    )
}
