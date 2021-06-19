import { useEffect, useState } from 'react'
import { ChartOptions, ChartData } from 'chart.js'
import { Line } from 'react-chartjs-2'

import { GetGamesByUserQuery } from '../../../generated/graphql'
import * as Styled from './ProfileChart.styled'

interface ProfileChartProps {
  gamesData: GetGamesByUserQuery
}

export const ProfileChart: React.FC<ProfileChartProps> = ({ gamesData }) => {
  const [scores, setScores] = useState<number[]>()
  const [labels, setLabels] = useState<string[]>()

  useEffect(() => {
    if (gamesData && gamesData.getGamesByUser) {
      const tempScores: number[] = []
      gamesData.getGamesByUser.forEach((game) => tempScores.push(game.score))
      setScores(tempScores)

      const tempLabels = new Array(tempScores.length).fill('')
      setLabels(tempLabels)
    }
  }, [gamesData])

  const data: ChartData = {
    labels: labels!,
    datasets: [
      {
        label: 'Game',
        data: scores!,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }

  return (
    <Styled.Wrapper>
      <Line type="line" data={data} />
    </Styled.Wrapper>
  )
}
