import { useEffect } from 'react'

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
    <div
      style={{
        position: 'absolute',
        overflow: 'hidden',
        margin: 'auto',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        width: '600px',
      }}
    >
      <ins
        data-ad-client="ca-pub-9097293613189817"
        data-ad-slot="5879611472"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}
