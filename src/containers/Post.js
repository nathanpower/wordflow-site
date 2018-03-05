import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => {
  const createMarkup = () => ({ __html: post.html })

  return (
    <div className="post">
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <div className="blog-content" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
})
