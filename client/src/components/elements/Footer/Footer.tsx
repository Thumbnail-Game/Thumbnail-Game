import { FaDiscord, FaGithub } from 'react-icons/fa'
import * as Styled from './Footer.styled'

export const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      <Styled.FooterLinks>
        <Styled.FooterIconContainer>
          <FaDiscord size={20} />
          <Styled.FooterIconLabel>Discord</Styled.FooterIconLabel>
        </Styled.FooterIconContainer>
        <Styled.FooterIconContainer>
          <FaGithub size={20} />
          <Styled.FooterIconLabel>GitHub</Styled.FooterIconLabel>
        </Styled.FooterIconContainer>
      </Styled.FooterLinks>
      <Styled.FeedbackText
        aria-label="form-link"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSf09pSMgbuJQfzOEDVXcvrQt3Z4W1xnpl38rqBRG01_qoWwYw/viewform?usp=sf_link"
      >
        Give us your feedback!
      </Styled.FeedbackText>
      <Styled.GithubVersion>Version 1.0</Styled.GithubVersion>
    </Styled.FooterContainer>
  )
}
