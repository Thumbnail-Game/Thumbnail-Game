import { useEffect } from 'react'

export const AdPopupVert1 = () => {
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
    <div>
      <ins
        data-ad-client="ca-pub-9097293613189817"
        data-ad-slot="5879611472"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}
