
import React from 'react'
//
import BlogMeta from './blog-meta'
import BlogNav from './blog-nav'

import './blog-post.scss'

export default (({ post, posts }) => {
  const createMarkup = () => ({ __html: post.html })

  return (
    <div className="blog-post-container row full-width col-xs-12 center-xs">
      <div className="blog-post col-lg-7 col-md-8 col-sm-10 col-xs-11 left-xs">
        <img src="https://placeimg.com/800/450/arch" width="100%" alt={post.title} />
        <h1 className="post-title">{post.title}</h1>
        <BlogMeta post={post} showDescription />
        <div className="blog-content" dangerouslySetInnerHTML={createMarkup()} />
      </div>
      <div className="blog-info col-lg-2 col-md-3 left-xs">
        <BlogNav
          showSearch={false}
          posts={posts}
        />
      </div>
    </div>
  )
})
