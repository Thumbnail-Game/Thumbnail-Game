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
