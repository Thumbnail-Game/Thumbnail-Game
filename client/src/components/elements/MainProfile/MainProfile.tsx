import * as Styled from './MainProfile.styled'
import { useGetUserQuery } from '../../../generated/graphql'
import { auth } from '../../../config/firebaseConfig'

export const MainProfile = () => {

    const uid = auth?.currentUser?.uid
    console.log(uid)
    const [user] = useGetUserQuery({ variables: { uid: uid ? uid : '' } })
    const userData = user && user.data
    console.log(userData)

    return (
        <Styled.Wrapper>
            <Styled.LeftContainer>
                <Styled.Name>{userData?.user?.displayName}</Styled.Name>
            </Styled.LeftContainer>
            <Styled.MiddleContainer>

            </Styled.MiddleContainer>
            <Styled.RightContainer>

            </Styled.RightContainer>
        </Styled.Wrapper>
    )
}
