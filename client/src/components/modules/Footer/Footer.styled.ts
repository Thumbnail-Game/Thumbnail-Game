import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  padding-bottom: 5px;
  height: 25px;
  bottom: 2%;
  text-align: center;

  @media (max-height: 985px) {
    bottom: 0%;
  }

  @media (max-height: 900px) and (min-width: 1700px) {
    display: none;
  }

  @media (max-height: 865px) and (min-width: 1645px) {
    display: none;
  }

  @media (max-height: 800px) and (min-width: 1590px) {
    display: none;
  }

  @media (max-height: 725px) and (min-width: 1515px) {
    display: none;
  }

  @media (max-height: 675px) and (min-width: 1460px) {
    display: none;
  }

  @media (max-height: 640px) and (min-width: 1330px) {
    display: none;
  }

  @media (max-height: 600px) and (min-width: 1280px) {
    display: none;
  }

  @media (max-height: 570px) and (min-width: 1195px) {
    display: none;
  }

  @media (max-height: 570px) and (max-width: 1195px) {
    display: none;
  }

  @media (max-width: 760px) {
    display: none;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  width: 33%;
`

export const LinkText = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};
`

export const FooterIconContainer = styled.div`
  display: flex;
  padding: 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const FooterIconLabel = styled.span`
  margin-left: 5px;
  font-family: 'Helvetica'
  font-size: 18px,
`

export const FeedbackTextContainer = styled.div`
  width: 33%;
`

export const FeedbackText = styled.a`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};

  &:hover {
    text-decoration: underline;
  }
`

export const FooterVersionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 33%;
`

export const PrivacyPolicy = styled.a`
  position: relative;
  font-family: 'Helvetica'
  font-size: 18px,
  background-color: red;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.primaryText};

  &:hover {
    text-decoration: underline;
  }
`

export const GithubVersion = styled.div`
  cursor: pointer;
  padding: 15px;

  &:hover {
    text-decoration: underline;
  }
`
