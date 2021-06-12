import styled from 'styled-components'

export const Parent = styled.div`
    background-color: #282828;
    height: 100%;
    width: 100%;
`

export const Line = styled.div`
    position: absolute;
    height: 30px;
    width: 100%;
    background-color: red;
    top: 120px;
    box-shadow: 6px 6px 19px black;
`

export const Logo = styled.img`
    position: absolute;
    width: 70%;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    filter: drop-shadow(6px 6px 19px black);
`
