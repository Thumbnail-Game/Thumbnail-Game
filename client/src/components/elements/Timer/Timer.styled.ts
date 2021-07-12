import styled from 'styled-components'

interface CountdownWrapperProps {
  mobileShift: boolean
}

export const CountdownWrapper = styled.div<CountdownWrapperProps>`
  position: absolute;
  font-family: 'Gothic Bold';
  font-size: ${(props) => (props.mobileShift ? '36px' : '28px')};
  right: 25px;
  bottom: 25px;

  @media (max-width: 390px) {
    top: 10px;
    right: 10px;
    z-index: 5;
  }
`
