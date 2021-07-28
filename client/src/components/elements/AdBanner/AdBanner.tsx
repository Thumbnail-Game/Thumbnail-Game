import { useEffect } from 'react'

export const AdBanner = () => {
  useEffect(() => {
    try {
      ; ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      )
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: 'block',
        position: 'absolute',
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        zIndex: 5,
      }}
<<<<<<< HEAD
      data-adtest="on"
=======
      data-ad-client="ca-pub-9097293613189817"
>>>>>>> 1238dd75572d3c056d5396694e69cb73897fc19e
      data-ad-slot="8296324938"
    />
  )
}
