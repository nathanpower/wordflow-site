import React from 'react'
import { withRouteData, Link } from 'react-static'
import marked from 'marked'
//
import './blog.scss'

export default withRouteData(({ post }) => {
  const createMarkup = () => ({ __html: marked(post.__content) })

  return (
    <div className="post">
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <div className="blog-content" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
})
