import React from 'react'

export default ({ Html, Head, Body, children }) => (
  <Html lang="en-UK">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
    </Head>
    <Body>{children}</Body>
  </Html>
)
