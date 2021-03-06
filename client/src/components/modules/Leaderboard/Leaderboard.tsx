import { useRouter } from 'next/router'
import Moment from 'react-moment'
import Skeleton from '@material-ui/lab/Skeleton'

import { PopupTransparentBackground } from '../../../styles/constantStyles'
import {
  useGetUsersQuery,
  useGetLeaderboardHighScoresQuery,
} from '../../../generated/graphql'
import { Search } from '../../../components/elements/index'
import * as Styled from './Leaderboard.styled'

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
  const [{ data }] = useGetLeaderboardHighScoresQuery()
  const leaderboardHighscores = data && data.getLeaderboardHighscores

  const [users] = useGetUsersQuery()
  const usersData = users && users.data

  const router = useRouter()

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

  const generateLeaderboardHighScores = () => {
    const set = new Set()
    const elements = []
    let rank = 1
    for (const score of leaderboardHighscores!) {
      if (set.has(score.user_id.displayName)) continue
      else set.add(score.user_id.displayName)

      elements.push(
        <Styled.PlayerInfoContainer key={rank}>
          <Styled.Rank>#{rank}</Styled.Rank>
          <Styled.PlayerInfo
            onClick={() => router.push(`/user/${score.user_id.displayName}`)}
          >
            <Styled.Username>
              {score.user_id.displayName.length > 18
                ? score.user_id.displayName.slice(0, 18) + '...'
                : score.user_id.displayName}
            </Styled.Username>
            <Styled.Highscore>{score.score}</Styled.Highscore>
            <Styled.Date>
              <Moment format="MM/DD/YYYY" interval={0}>
                {parseInt(score.createdAt)}
              </Moment>
            </Styled.Date>
          </Styled.PlayerInfo>
        </Styled.PlayerInfoContainer>
      )

      rank++
      if (rank === 101) break
    }

    return elements
  }

  return (
    <>
      <Styled.LeaderboardWrapper>
        <Styled.Leaderboard>
          <Styled.LabelContainer>
            <Styled.Label>Leaderboard (Timed Mode Only)</Styled.Label>
            <Styled.ColumnNamesContainer>
              <Styled.ColumnNames>Username</Styled.ColumnNames>
              <Styled.ColumnNames>Highscore</Styled.ColumnNames>
              <Styled.ColumnNames>Date</Styled.ColumnNames>
            </Styled.ColumnNamesContainer>
          </Styled.LabelContainer>
          <Styled.InfoWrapper>
            {leaderboardHighscores
              ? generateLeaderboardHighScores()
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
      </Styled.LeaderboardWrapper>
      <PopupTransparentBackground onClick={toggleLeaderboard} />
    </>
  )
}
