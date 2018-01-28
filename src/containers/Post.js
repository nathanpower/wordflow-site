import React from 'react'
import { getRouteProps, Link } from 'react-static'
import marked from 'marked'
//

export default getRouteProps(({ post }) => {
  const createMarkup = () => ({ __html: marked(post.__content) })

  return (
    <div>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <div className="blog-content" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
})
