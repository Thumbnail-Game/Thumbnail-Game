import styled from 'styled-components'

export const Parent = styled.div`
    background-color: #282828;
    height: 100%;
    width: 100%;
    overflow:hidden;
`

export const Line = styled.div`
    position: absolute;
    height: 30px;
    width: 100%;
    background-color: red;
    top: 120px;
    box-shadow: 15px 15px 18px black;
    z-index:1;
`

export const Logo = styled.img`
    position: absolute;
    width: 70%;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    filter: drop-shadow(15px 15px 16px black);
    z-index:1;
`

export const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-rows: 50px 50px
    grid-gap: 5px
`