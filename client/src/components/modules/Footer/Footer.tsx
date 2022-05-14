import { useState } from 'react'
import { FaDiscord, FaGithub, FaCoffee } from 'react-icons/fa'

import { VersionLog } from '../../elements/index'
import * as Styled from './Footer.styled'

export const Footer: React.FC = () => {
  const [showingVersionLog, setShowingVersionLog] = useState<boolean>(false)

  const toggleShowingVersionLog = () => {
    setShowingVersionLog((oldShowingVersionLog) => !oldShowingVersionLog)
  }
  return (
    <>
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
          <Styled.LinkText
            href="https://www.buymeacoffee.com/thumbnailgame1"
            target="_blank"
            aria-label="buy-me-a-coffee"
          >
            <Styled.FooterIconContainer>
              <FaCoffee size={20} />
              <Styled.FooterIconLabel>Buy me a coffee</Styled.FooterIconLabel>
            </Styled.FooterIconContainer>
          </Styled.LinkText>
        </Styled.FooterLinks>
        <Styled.FeedbackTextContainer>
          <Styled.FeedbackText
            aria-label="form-link"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf09pSMgbuJQfzOEDVXcvrQt3Z4W1xnpl38rqBRG01_qoWwYw/viewform?usp=sf_link"
          >
            Give us your feedback!
          </Styled.FeedbackText>
        </Styled.FeedbackTextContainer>
        <Styled.FooterVersionContainer>
          <Styled.LinkTag
            href="mailto:thumbnailgame@gmail.com"
            aria-label="contact-us"
            target="_blank"
            rel="noreferrer"
          >
            <Styled.FooterText>Contact Us</Styled.FooterText>
          </Styled.LinkTag>
          <Styled.LinkTag href="/privacyPolicy" target="_blank">
            <Styled.FooterText>Privacy Policy</Styled.FooterText>
          </Styled.LinkTag>
          <Styled.FooterText onClick={toggleShowingVersionLog}>
            Version 1.1
          </Styled.FooterText>
        </Styled.FooterVersionContainer>
      </Styled.FooterContainer>
      {showingVersionLog && (
        <VersionLog toggleShowingVersionLog={toggleShowingVersionLog} />
      )}
    </>
  )
}
