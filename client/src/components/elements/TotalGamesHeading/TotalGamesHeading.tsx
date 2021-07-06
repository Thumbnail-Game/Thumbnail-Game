import { useGetTotalGamesQuery } from '../../../generated/graphql'
import * as Styled from './TotalGamesHeading.styled'

export const TotalGamesHeading: React.FC = () => {
  const [totalGames] = useGetTotalGamesQuery()
  const totalGamesData = totalGames && totalGames.data

  return totalGamesData && totalGamesData.getTotalGames ? (
    <Styled.TotalGamesContainer>
      <Styled.TotalGamesHeading>
        {Intl.NumberFormat().format(totalGamesData.getTotalGames)} games played!
      </Styled.TotalGamesHeading>
    </Styled.TotalGamesContainer>
  ) : null
}
