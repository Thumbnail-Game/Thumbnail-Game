import { Modal, Box } from '@material-ui/core'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

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
      <Box style={style}>
        <div style={{ backgroundColor: 'black' }}>
          <ins
            className="adsbygoogle adbanner-customize"
            data-ad-client="ca-pub-6724421299859990"
            data-ad-slot="8296324939"
            style={{ display: 'block', width: '600px', height: '400px' }}
            // data-ad-format="auto"
            // data-full-width-responsive="true"
          />
        </div>
      </Box>
    </Modal>
  )
}
