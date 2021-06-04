import { withUrqlClient } from 'next-urql'
import styled from 'styled-components'

import { ThemeToggle } from '../components/elements/index'
import { Thumbnail } from '../components/modules/index'
import { Nav } from '../components/elements/index'
import { createUrqlClient } from '../util/createURQLClient'
import { useMediaQuery } from '../hooks/useMediaQuery'

const Play: React.FC = () => {
    const largerThan500px = useMediaQuery('(min-width: 775px)')
    return (
        <>
            <Nav />
            <ThemeToggle />
            <ViewText>
                <HeaderText style={{ fontSize: '45px' }}>Which Video Has More Views?</HeaderText>
            </ViewText>
            <Thumbnail />

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
    margin-top: 60px;
    text-align: center;
`

const HeaderText = styled.div`
    font-family: "Gothic Bold";
`

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)