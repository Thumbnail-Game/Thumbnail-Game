import { NextPage } from 'next'
import styled from 'styled-components'

const privacyPolicy: NextPage = () => {
  return (
    <PolicyWrapper>
      <Title>Privacy Policy</Title>
      <Header>What data do we collect?</Header>
      <List>
        <ListElement>Email</ListElement>
        <ListElement>Username</ListElement>
        <ListElement>Your invidual game scores</ListElement>
      </List>
      <Header>How do we collect your data?</Header>
      <List>
        <ListElement>Create an account</ListElement>
        <ListElement>Complete a typing test</ListElement>
        <ListElement>Change settings on the website</ListElement>
      </List>
      <Header>How do we use your data?</Header>
      <List>
        <ListElement>Allow you to view your game history</ListElement>
        <ListElement>Save your settings</ListElement>
        <ListElement>Display leaderboards</ListElement>
      </List>
      <Header>How do we store your data?</Header>
      <StandardText>
        The YouTube Thumbnail Game securely stores your data in PostreSQL
      </StandardText>
      <Header>What are your data protection rights?</Header>
      <List>
        <ListElement>
          The right to access – You have the right to request The YouTube
          Thumbnail Game for copies of your personal data. We may limit the
          number of times this request can be made to depending on the size of
          the request.
        </ListElement>
        <ListElement>
          The right to rectification – You have the right to request that The
          YouTube Thumbnail Game correct any information you believe is
          inaccurate. You also have the right to request The YouTube Thumbnail
          Game to complete the information you believe is incomplete.
        </ListElement>
        <ListElement>
          The right to erasure – You have the right to request that The YouTube
          Thumbnail Game erase your personal data, under certain conditions..
        </ListElement>
        <ListElement>
          The right to restrict processing – You have the right to request that
          The YouTube Thumbnail Game restrict the processing of your personal
          data, under certain conditions..
        </ListElement>
        <ListElement>
          The right to object to processing – You have the right to object to
          The YouTube Thumbnail Game processing of your personal data, under
          certain conditions.
        </ListElement>
        <ListElement>
          The right to data portability – You have the right to request that The
          YouTube Thumbnail Game transfer the data that we have collected to
          another organization, or directly to you, under certain conditions.
        </ListElement>
      </List>
      <Header>What are cookies?</Header>
      <StandardText>
        Cookies are text files placed on your computer to collect standard
        Internet log information and visitor behavior information. When you
        visit our websites, we may collect information from you automatically
        through cookies or similar technology.
      </StandardText>
      <Header>How do we use cookies</Header>
      <StandardText>We use cookies to store your highscore.</StandardText>
      <Header>How to manage cookies</Header>
      <StandardText>
        You can set your browser not to accept cookies, and the above website
        tells you how to remove cookies from your browser. However, in a few
        cases, some of our website features may behave unexpectedly or fail to
        function as a result.
      </StandardText>
      <Header>Changes to our privacy policy</Header>
      <StandardText>
        The YouTube Thumbnail Game keeps its privacy policy under regular review
        and places any updates on this web page. The Monkeytype privacy policy
        may be subject to change at any given time without notice. This privacy
        policy was last updated on 13 July 2021.
      </StandardText>
      <Header>How to contact us</Header>
      <StandardText>Discord: breadone#3029</StandardText>
    </PolicyWrapper>
  )
}

const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
`

const Title = styled.div`
  font-size: 40px;
  font-family: 'Gothic Bold';
  align-self: center;
`

const Header = styled.div`
  margin-top: 35px;
  font-size: 22px;
  font-family: 'Gothic Bold';
`

const StandardText = styled.div`
  font-family: 'Helvetica';
  padding: 5px;
`

const List = styled.ul``

const ListElement = styled.li`
  font-family: 'Helvetica';
  padding: 5px;
`

export default privacyPolicy
