export type ThemeType = typeof theme['light']

const theme = {
  light: {
    background: 'white',
    navBackground: 'white',
    divider: '#FF0000',
    primaryText: '#282828',
    footer: '#282828'
  },
  dark: {
    background: '#282828',
    navBackground: '#282828',
    divider: '#FF0000',
    primaryText: 'white',
    footer: '#595959'
  },
}

export const commonColors = {
  red: '#C6493A',
}

export default theme
