import React from 'react'

const renderMeta = routeInfo => {
  if (!routeInfo || !routeInfo.path) {
    return null
  }

  const siteName = 'WordFlow'
  const tagLine = 'Let us worry about the words'
  const siteDescription = 'A one stop shop for all your Copy and content needs'
  const canonicalUrl = 'https://wwww.wordflow.ie'
  const defaultImage = 'splash-screen.jpg'

  if (routeInfo.path === '/') {
    return (
      <React.Fragment>
        <title>{`${siteName} - ${tagLine}`}</title>
        <meta name="description" content={siteDescription} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={`${canonicalUrl}/images/${defaultImage}`} />
        <meta property="og:title" content={`${siteName} - ${tagLine}`} />
        <meta property="og:url" content={`${canonicalUrl}`} />
      </React.Fragment>
    )
  }

  if (routeInfo.path.includes('blog/post')) {
    const {
      title, description, author, date, image,
    } = routeInfo.allProps.post
    return (
      <React.Fragment>
        <title>{`${title}`}</title>
        <meta name="description" content={description} />
        <meta property="article:author" content={author} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={`${canonicalUrl}/images/${image}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="article:published_time" content={date} />
        <meta property="og:url" content={`${canonicalUrl}/${routeInfo.path}`} />
      </React.Fragment>
    )
  }

  const { detail = {} } = routeInfo.allProps
  const { meta = {}, title = siteName } = detail

  return (
    <React.Fragment>
      {meta.title && <title>{`${meta.title}`}</title>}
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.description && <meta property="og:description" content={meta.description} />}
      {meta.title && <meta property="og:site_name" content={siteName} />}
      {meta.title && <meta property="og:image" content={`${canonicalUrl}/images/${defaultImage}`} />}
      {meta.title && <meta property="og:title" content={`${meta.title}`} />}
      {meta.title && <meta property="og:url" content={`${canonicalUrl}/${routeInfo.path}`} />}
    </React.Fragment>
  )
}

export default ({
  Html, Head, Body, children, routeInfo,
}) => (
  <Html lang="en-UK">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:300,400,400i,700|Raleway:300" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon//manifest.json" />
      {renderMeta(routeInfo)}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/images/favicon//ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="google-site-verification" content="47fgjA0SGPzAGm5kQP5N-gnlMeFXlUChmUlRR3r3q-w" />
      <meta name="google-site-verification" content="BRya9GrV-bAtkOTUh6SEWrcfv4UlKap5m-DzbGLBkvw" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-90672869-4" />

    </Head>
    <Body>{children}</Body>
  </Html>
)
