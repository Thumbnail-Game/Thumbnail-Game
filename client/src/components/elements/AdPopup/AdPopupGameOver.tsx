import { useEffect } from 'react'
import * as Styled from './AdPopup.styled'

export const AdPopupGameOver = () => {
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
    <Styled.PopupContainer>
      <ins
        style={{ display: 'block', width: '600px', height: '600px', background:'white' }}
        data-ad-client="ca-pub-9097293613189817"
        data-ad-slot="5879611472"
        // data-full-width-responsive="true"
      ></ins>
    </Styled.PopupContainer>
  )
}
