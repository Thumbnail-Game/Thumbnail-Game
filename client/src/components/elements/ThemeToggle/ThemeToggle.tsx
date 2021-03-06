import { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Switch from 'react-switch'

import { ThemeContext } from '../../../providers/AppProvider'
import { ToggleSwitchContainer } from '../../../styles/constantStyles'

export const ThemeToggle: React.FC = () => {
  const { toggleTheme, themeMode } = useContext(ThemeContext)

  return (
    <ToggleSwitchContainer>
      <Switch
        checked={themeMode === 'light' ? true : false}
        height={25}
        width={60}
        handleDiameter={10}
        onColor={'#222222'}
        offColor={'#222222'}
        checkedIcon={
          <FaSun
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 18,
              paddingLeft: 5,
            }}
            color={themeMode === 'light' ? '#ef8e38' : 'gray'}
          />
        }
        uncheckedIcon={
          <FaMoon
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 18,
              paddingLeft: 14,
            }}
            color={themeMode === 'dark' ? 'yellow' : 'gray'}
          />
        }
        onChange={toggleTheme}
      />
    </ToggleSwitchContainer>
  )
}
