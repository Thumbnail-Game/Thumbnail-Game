import styled, { keyframes } from 'styled-components'

export const SummaryAnimation = keyframes`
    0% {
        width:100%;
        left:-100%;
        position:absolute;
    }
    100% {
       position:absolute;
       left:0;
       width:100%;
    }
`


export const GameSummaryWrapper = styled.div`
   animation-name:${SummaryAnimation};
   animation-duration:1000ms;
   width:100%; 
`