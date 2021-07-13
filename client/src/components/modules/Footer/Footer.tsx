import { FaDiscord, FaGithub } from 'react-icons/fa'
import * as Styled from './Footer.styled'

export const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      <Styled.FooterLinks>
        <Styled.LinkText
          href="https://discord.gg/y296cy54pZ"
          target="_blank"
          aria-label="discord"
        >
          <Styled.FooterIconContainer>
            <FaDiscord size={20} />
            <Styled.FooterIconLabel>Discord</Styled.FooterIconLabel>
          </Styled.FooterIconContainer>
        </Styled.LinkText>
        <Styled.LinkText
          href="https://github.com/Thumbnail-Game/Thumbnail-Game"
          target="_blank"
          aria-label="github"
        >
          <Styled.FooterIconContainer>
            <FaGithub size={20} />
            <Styled.FooterIconLabel>GitHub</Styled.FooterIconLabel>
          </Styled.FooterIconContainer>
        </Styled.LinkText>
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
