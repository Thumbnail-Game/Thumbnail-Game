import styled from 'styled-components'

export const Component = styled.div`
    position:relative;
    width:1080px;
    height:750px;
    border-radius:15px;
    margin:auto;
    margin-top:50px;
    z-index:2;
    background-color:#424242;
    display:flex;
    justify-content: space-around;
`

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:1;
    opacity:0.5;
    background-color:#111111;
`

export const Leaderboard = styled.div`
    width:650px;
    height:680px;
    background-color:#606060;
    border-radius:15px;
    margin:auto;
    background-color:green;
`
