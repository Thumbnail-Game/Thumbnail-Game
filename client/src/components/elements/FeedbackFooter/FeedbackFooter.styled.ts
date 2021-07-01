import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  position: fixed;
  padding-bottom: 5px;
  height: 25px;
  bottom: 0%;
  text-align: center;
`
export const FooterText = styled.a`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};

  &:hover {
    text-decoration: underline;
  }
`
