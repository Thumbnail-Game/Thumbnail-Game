import { Modal, Box } from '@material-ui/core'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
      <Box style={style}>
        <ins
          className="adsbygoogle"
          data-ad-client="ca-pub-6724421299859990"
          data-ad-slot="8296324938"
        />
      </Box>
    </Modal>
  )
}
