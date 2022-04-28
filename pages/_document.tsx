import { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentInitialProps } from 'next/document'

export default function Document(props: DocumentInitialProps) {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="preload"
          href="/fonts/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}
      </Head>
      <body className="p-24 bg-background sm:px-10 2sm:px-5 selection:text-indigo-600 selection:bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
