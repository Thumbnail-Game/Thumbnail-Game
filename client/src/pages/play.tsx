import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import styled from 'styled-components'

import { Thumbnail } from '../components/modules/index'
import { Nav } from '../components/modules/index'
import { createUrqlClient } from '../util/index'

interface PlayProps {
  initialHighScore?: string
}

const Play: NextPage<PlayProps> = ({ initialHighScore }) => {
  console.log(initialHighScore)
  return (
    <>
      <Nav />
      <Thumbnail />
    </>
  )
}

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Play)
