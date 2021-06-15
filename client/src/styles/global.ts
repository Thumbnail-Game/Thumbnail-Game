import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
@font-face {
  font-family: 'Gothic Bold';
  src: url("/fonts/gothicb.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url("/fonts/Roboto-Bold.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

${({ theme }) => css`
  html {
    height: 100%;
    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
      background: ${theme.background};
      color: ${theme.primaryText};
      font-family: Newsreader;
    }
  }
`}
`
