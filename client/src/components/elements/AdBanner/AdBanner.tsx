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
    />
  )
}
