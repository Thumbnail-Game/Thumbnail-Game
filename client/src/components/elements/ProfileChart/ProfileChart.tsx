import * as Styled from './ProfileChart.styled'
import { useGetUserQuery } from '../../../generated/graphql'
import { auth } from '../../../config/firebaseConfig'
import { Line } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';

export const ProfileChart = () => {

    const uid = auth?.currentUser?.uid
    console.log(uid)
    const [user] = useGetUserQuery({ variables: { uid: uid ? uid : '' } })
    const userData = user && user.data
    console.log(userData)

    const data: ChartData = {
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: 'Game',
                data: [12, 19, 3, 5, 2, 3],
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
