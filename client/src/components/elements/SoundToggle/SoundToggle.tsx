import { useContext } from 'react'
import { GoMute, GoUnmute } from 'react-icons/go'
import Switch from 'react-switch'

import { SoundContext } from '../../../providers/AppProvider'
import { ToggleSwitchContainer } from '../../../styles/constantStyles'

export const SoundToggle: React.FC = () => {
  const { toggleSound, sound } = useContext(SoundContext)

  return (
    <ToggleSwitchContainer>
      <Switch
        checked={sound === 'true' ? true : false}
        height={25}
        width={60}
        handleDiameter={10}
        onColor={'#222222'}
        offColor={'#222222'}
        checkedIcon={
          <GoMute
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 20,
              paddingLeft: 5,
            }}
            color={'gray'}
          />
        }
        uncheckedIcon={
          <GoUnmute
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 20,
              paddingLeft: 14,
            }}
            color={'gray'}
          />
        }
        onChange={toggleSound}
      />
    </ToggleSwitchContainer>
  )
}
