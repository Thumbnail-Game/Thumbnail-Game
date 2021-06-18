import { GetUserByDisplayNameQuery, useGetGamesByUserQuery } from '../../../generated/graphql'
import { auth } from '../../../config/firebaseConfig'
import * as Styled from './MainProfile.styled'

interface ProfileChartProps {
    userData: GetUserByDisplayNameQuery
}

export const MainProfile: React.FC<ProfileChartProps> = ({ userData }) => {

    const [games] = useGetGamesByUserQuery({ variables: { userId: userData!.userByDisplayName!.id } })

    return (
        <Styled.Wrapper>
            <Styled.LeftContainer>
                <Styled.Name>{userData!.userByDisplayName!.displayName}</Styled.Name>
            </Styled.LeftContainer>
            <Styled.MiddleContainer>

            </Styled.MiddleContainer>
            <Styled.RightContainer>

            </Styled.RightContainer>
        </Styled.Wrapper>
    )
}