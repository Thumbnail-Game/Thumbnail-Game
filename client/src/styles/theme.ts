export type ThemeType = typeof theme['light']

const theme = {
  light: {
    theme: 'light',
    background: 'white',
    navBackground: 'white',
    divider: '#FF0000',
    primaryText: '#282828',
    footer: '#282828',
    button: '#E7E7E7',
    settingBackground: '#E0E0E0',
    scoreBackground: '#F1F1F1',
    nextArrow: '#444444',
    signUp: '#E36969',
    formBackground: '#FFFFFF',
  },
  dark: {
    theme: 'dark',
    background: '#282828',
    navBackground: '#282828',
    divider: '#FF0000',
    primaryText: 'white',
    footer: '#595959',
    button: '#4A4A4A',
    settingBackground: '#3D3D3D',
    scoreBackground: '#1C1C1C',
    nextArrow: '#F0F0F0',
    signUp: '#9F1313',
    formBackground: '#212121',
  },
}

export const commonColors = {
  red: '#C6493A',
}

export default theme
