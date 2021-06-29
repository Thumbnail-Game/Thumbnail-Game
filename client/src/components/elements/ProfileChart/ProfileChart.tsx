import { useEffect, useState } from 'react'
import { ChartOptions, ChartData } from 'chart.js'
import { Line } from 'react-chartjs-2'

import { GetGamesByUserQuery } from '../../../generated/graphql'
import * as Styled from './ProfileChart.styled'

interface ProfileChartProps {
  gamesData: GetGamesByUserQuery
  gamemode: string
}

export const ProfileChart: React.FC<ProfileChartProps> = ({
  gamesData,
  gamemode,
}) => {
  const [scores, setScores] = useState<number[]>()
  const [labels, setLabels] = useState<string[]>()

  useEffect(() => {
    if (gamesData && gamesData.getGamesByUser) {
      const tempScores: number[] = []
      gamesData.getGamesByUser.forEach((game) => {
        if (game.gamemode === gamemode) tempScores.push(game.score)
      })
      setScores(tempScores.slice((tempScores.length - 30), tempScores.length))

      const tempLabels = new Array(tempScores.length).fill('')
      setLabels(tempLabels.slice((tempLabels.length - 30), tempLabels.length))
    }
  }, [gamemode, gamesData])

  const data: ChartData = {
    labels: labels!,
    datasets: [
      {
        label: 'Score',
        data: scores!,
        fill: false,
        backgroundColor: 'white',
        borderColor: '#8AE37C',
        borderWidth: 4,
      },
    ],
  }

  const option = {
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem: any) {
          return tooltipItem.yLabel
        },
      },
    },
    lineTension: 0.4,
  }

  return (
    <Styled.Wrapper>
      <Line type="line" data={data} options={option} />
    </Styled.Wrapper>
  )
}
