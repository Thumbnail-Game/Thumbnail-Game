import { useEffect } from 'react'

export const AdBanner = () => {
  useEffect(() => {
    try {
      // ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
      //   {}
      // )
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      )
    } catch (err) {
      console.log(err)
    }
  }, [])

  // useEffect(() => {
  //   const pushAd = () => {
  //     try {
  //       const adsbygoogle = (window as any).adsbygoogle
  //       console.log({ adsbygoogle })
  //       adsbygoogle.push({})
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }

  //   let interval = setInterval(() => {
  //     // Check if Adsense script is loaded every 300ms
  //     if ((window as any).adsbygoogle) {
  //       pushAd()
  //       // clear the interval once the ad is pushed so that function isn't called indefinitely
  //       clearInterval(interval)
  //     }
  //   }, 300)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      data-ad-client="ca-pub-6724421299859990"
      data-ad-slot="8296324938"
      style={{ display: 'block', width: '300px', height: '250px' }}
    />
  )
}
