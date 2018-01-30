import React from 'react'

export default ({ Html, Head, Body, children }) => (
  <Html lang="en-UK">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Body>{children}</Body>
  </Html>
)
