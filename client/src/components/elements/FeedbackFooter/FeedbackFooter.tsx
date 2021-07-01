import * as Styled from './FeedbackFooter.styled'

export const FeedbackFooter: React.FC = () => {
  return (
    <Styled.FooterContainer>
      <Styled.FooterText
        aria-label="form-link"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSf09pSMgbuJQfzOEDVXcvrQt3Z4W1xnpl38rqBRG01_qoWwYw/viewform?usp=sf_link"
      >
        Give us your feedback!
      </Styled.FooterText>
    </Styled.FooterContainer>
  )
}
