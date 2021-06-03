import { withUrqlClient } from 'next-urql'
import styled from 'styled-components'

import { /*useGetUserQuery*/ useGetUsersQuery } from '../generated/graphql'
import { ThemeToggle, Thumbnail } from '../components/elements/index'
import { Nav } from '../components/elements/index'
import { createUrqlClient } from '../util/createURQLClient'
import { useMediaQuery } from '../hooks/useMediaQuery'
import * as Styled from '../styles/constantStyles'

const Play: React.FC = () => {

    //  example query with id parameter
    // const [user] = useGetUserQuery({ variables: { id: '1' } })


    const largerThan500px = useMediaQuery('(min-width: 775px)')

    return (
        <>
            <Nav />
            <ThemeToggle />
            <ViewText>
                <Styled.HeaderText>Which Video Has More Views?</Styled.HeaderText>
            </ViewText>
            <Styled.CenterContainer style={{ width: '1500px' }}>
                <Thumbnail />
            </Styled.CenterContainer>
        </>
    )
}

interface StyledUserContainerProps {
    largerThan500px: boolean
}

const StyledUserContainer = styled.div<StyledUserContainerProps>`
  width: ${(props) => (props.largerThan500px ? '700px' : '90%')};
  height: 100%;
  padding: 15px;
  margin: 20px 0px 20px 0px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.background};
`

const ViewText = styled.div`
    margin-top: 50px;
    text-align: center;
`

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)