import Image from 'next/image'
import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:1500px;
    margin: auto;
    position: relative;
    top: 22.5px;
`

interface LogoProps {
    layout: string;
}

export const Logo = styled(Image)`
    
`

export const Nav = styled.div`
    width: 100%;
    height: 110px;
    background-color: ${props => props.theme.navBackground};
    position: relative;
`

export const Divider = styled.div`
    width: 100%;
    height: 10px;
    background-color: ${props => props.theme.divider};
    position: absolute;
    bottom: 0;
    left:0;
`