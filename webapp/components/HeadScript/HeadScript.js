import Script from 'next/script'

const HeadScript = () => {
  return (
    <>
      {/*Global site tag (gtag.js) - Google Analytics */} 
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ET78NSWN0V" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ET78NSWN0V');
          `,
        }}
      />
    </>
  )
}

export default HeadScript