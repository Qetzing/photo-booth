/* eslint-disable @next/next/google-font-display */
// noinspection HtmlRequiredTitleElement

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de" className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Indie%20Flower"
          rel="stylesheet"
        />
      </Head>
      <body className="transition ease-in-out duration-500">
        <Main/>
        <NextScript/>
        <div
          id="focus"
          tabIndex={-1}
          aria-hidden={true}
          className="
            invisible fixed top-0 left-0 z-10 w-screen h-screen
            bg-black transition-all ease-in-out delay-700 duration-200 opacity-0
          "
        />
      </body>
    </Html>
  )
}