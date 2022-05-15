import { useEffect } from 'react'

export const AdBanner = () => {
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
    <ins
      className="adsbygoogle adbanner-customize"
      data-ad-client="ca-pub-6724421299859990"
      data-ad-slot="8296324938"
      style={{
        display: 'block',
        position: 'absolute',
        width: '728px',
        height: '90px',
        margin: 'auto',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
      }}
    />
  )
}
