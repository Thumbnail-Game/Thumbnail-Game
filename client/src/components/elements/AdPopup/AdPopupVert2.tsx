import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import * as Styled from './AdPopup.styled'

export const AdPopupVert2 = () => {
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
      <Styled.VerticalPopup2>
        <ins
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
          data-ad-client="ca-pub-9097293613189817"
          data-ad-slot="9459516414"
          className="adsbygoogle adbanner-customize"
        ></ins>
      </Styled.VerticalPopup2>
    </>
  )
}
