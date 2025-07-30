"use client"

import { useEffect } from "react"

export function Analytics() {
  useEffect(() => {
    // Google Analytics
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `
    document.head.appendChild(script2)

    // Meta Pixel
    const script3 = document.createElement("script")
    script3.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script3)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
      document.head.removeChild(script3)
    }
  }, [])

  return null
}
