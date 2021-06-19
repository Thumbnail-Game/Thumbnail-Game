import {
  GetGamesByUserQuery,
  GetUserByDisplayNameQuery,
  useGetGamesByUserQuery,
} from '../../../generated/graphql'
import * as Styled from './MainProfile.styled'

interface ProfileChartProps {
  userData: GetUserByDisplayNameQuery
  gamesData: GetGamesByUserQuery
}

export const MainProfile: React.FC<ProfileChartProps> = ({
  userData,
  gamesData,
}) => {
  console.log(gamesData)

  return (
    <Styled.Wrapper>
      <Styled.LeftContainer>
        <Styled.Name>{userData!.userByDisplayName!.displayName}</Styled.Name>
      </Styled.LeftContainer>
      <Styled.MiddleContainer></Styled.MiddleContainer>
      <Styled.RightContainer></Styled.RightContainer>
    </Styled.Wrapper>
  )
}
