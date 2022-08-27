/* eslint-disable @next/next/google-font-display */
// noinspection HtmlRequiredTitleElement

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Indie%20Flower"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}