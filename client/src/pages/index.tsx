import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import { auth } from '../config/firebaseConfig'
import styled, { keyframes } from 'styled-components'

import { useGetVideosQuery } from '../generated/graphql'
import { createUrqlClient } from '../util/index'
import { HomeDisplay } from '../components/modules/index'
// import { Nav } from '../components/modules/index'
// import { StyledGridContainer } from '../styles/constantStyles'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      {/* <Nav /> */}
      <HomeDisplay showLogo={true} />
      <PlayButton onClick={() => router.push('/play')}>Play</PlayButton>
    </>
  )
}

export const PlayButtonAnimation = keyframes`
  0% {
    transform:scale(0.8); 
  }
  70% {
    transform:scale(1.1)
  }
  100%{
    transform:scale(1.06);
  }
`

export const PlayButtonAnimationOut = keyframes`
  100% {
    transform:scale(0.8); 
  }
  0%{
    transform:scale(1.06);
  }
`

export const PlayButton = styled.div`
  position: absolute;
  bottom: 15%;
  margin: auto;
  font-size: 45px;
  font-family: 'Gothic Bold';
  text-align: center;
  left: 0;
  right: 0;
  transform: scale(0.8);
  z-index: 1;
  border-radius: 13px;
  box-shadow: 8px 8px 20px black;
  width: 300px;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: red;
  cursor: pointer;
  animation-name: ${PlayButtonAnimationOut};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  color: white;

  &:hover {
    animation-name: ${PlayButtonAnimation};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
`

//  creates client with server side rendering enabled
export default withUrqlClient(createUrqlClient, { ssr: true })(Home)
