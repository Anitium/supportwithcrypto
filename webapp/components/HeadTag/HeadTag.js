import Head from 'next/head'

const HeadTag = () => {
  return (
    <>
      <Head>
        <title>Support With Crypto</title>
        {/* General */}
        <meta property="og:title"       content="Support With Crypto" key="title" />
        <meta name="title"              content="Support With Crypto"/>
        <meta name="description"        content="Support With Crypto - Start receiving your crypto donations. Help creators to meet their goals! It feels better helping others, helping together."/>
        <meta name="keywords"           content="Support With Crypto Pay Blockchain Ethereum Polygon Solana ETH MATIC SOL"/>
        {/* Twitter */}
        <meta name="twitter:card"       content="summary_large_image" />
        <meta name="twitter:site"       content="@SupportWCrypto" />
        <meta name="twitter:creator"    content="@SupportWCrypto" />
        <meta name="twitter:title"      content="Support With Crypto" />
        <meta name="twitter:image"      content="/assets/img/supportwithcrypto.jpg" />
        
        {/* Facebook */}
        <meta property="og:url"         content="https://www.supportwithcrypto.com" />
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="Support With Crypto" />
        <meta property="og:description" content="Support With Crypto - Start receiving your crypto donations. Help creators to meet their goals! It feels better helping others, helping together." />
        <meta property="og:image"       content="/assets/img/supportwithcrypto.jpg" />
      </Head>
    </>
  )
}

export default HeadTag