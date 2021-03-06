import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import * as Styled from './AdPopup.styled'

interface AdPopupProps {
  setShowAd: Dispatch<SetStateAction<boolean>>
}

export const AdPopupGameOver: React.FC<AdPopupProps> = ({ setShowAd }) => {
  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      )
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <>
      <Styled.PopupContainer>
        {/* <ins
          // style={{ display: 'block', width: '100%', height: '100%' }}
          style={{ display: 'block' }}
          data-ad-format="auto"
          data-ad-client="ca-pub-9097293613189817"
          data-ad-slot="5879611472"
          // className="adsbygoogle adbanner-customize"
          className="adsbygoogle infeed"
        ></ins> */}
        <ins
          className="adsbygoogle infeed"
          style={{ display: 'inline-block', width: '728px', height: '450px' }}
          data-ad-client="ca-pub-9097293613189817"
          data-ad-slot="9459516414"
        ></ins>
      </Styled.PopupContainer>
      <Styled.PopUpBackground
        onClick={() => {
          setShowAd(false)
        }}
      />
    </>
  )
}
