import { useEffect } from 'react'

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
    <ins
      data-ad-client="ca-pub-9097293613189817"
      data-ad-slot="9459516414"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}
