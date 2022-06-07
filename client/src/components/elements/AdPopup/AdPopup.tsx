import { Modal, Box } from '@material-ui/core'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import * as Styled from './AdPopup.styled'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  minHeight: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
} as any

interface AdPopupProps {
  showAd: boolean
  setShowAd: Dispatch<SetStateAction<boolean>>
}

export const AdPopup: React.FC<AdPopupProps> = ({ showAd, setShowAd }) => {
  // const handleOpen = () => setOpen(true)
  const handleClose = () => setShowAd(false)

  return (
    <Modal
      open={showAd}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Styled.PopupContainer>
          <ins
            style={{ display: 'block', width: '100%', height: '100%' }}
            data-ad-client="ca-pub-9097293613189817"
            data-ad-slot="5879611472"
            className="adsbygoogle adbanner-customize"
          ></ins>
      </Styled.PopupContainer>
    </Modal>
  )
}
