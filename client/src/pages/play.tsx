import { useState } from 'react'
import { withUrqlClient } from 'next-urql'
import styled from 'styled-components'

import { ThemeToggle } from '../components/elements/index'
import { Thumbnail } from '../components/modules/index'
import { Nav } from '../components/modules/index'
import { createUrqlClient } from '../util/createURQLClient'

const Play: React.FC = () => {
  return (
    <>
      <Nav />
      <ViewText>
        <HeaderText style={{ fontSize: '45px' }}>
          Which Video Has More Views?
        </HeaderText>
      </ViewText>
      <Thumbnail />
    </>
  )
}

const ViewText = styled.div`
  margin-top: 60px;
  text-align: center;
`

const HeaderText = styled.div`
  font-family: 'Gothic Bold';
`

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
