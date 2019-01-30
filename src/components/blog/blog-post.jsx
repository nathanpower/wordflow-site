
import React from 'react'
//
import BlogMeta from './blog-meta'
import BlogNav from './blog-nav'

import './blog-post.scss'

export default (({ post = { category: '' }, posts }) => {
  const createMarkup = () => ({ __html: post.html })
  const image = post.image ? `../../../images/${post.image}` : 'https://placeimg.com/800/450/arch'
  const imageCaption = post.imageCaption || ''

  return (
    <div className="blog-post-container row full-width col-xs-12 center-xs">
      <div className="blog-post col-lg-7 col-md-8 col-sm-10 col-xs-11 left-xs">
        <img title={imageCaption} src={image} width="100%" alt={post.title} />
        <h1 className="post-title">{post.title}</h1>
        <BlogMeta post={post} showDescription />
        <div className="blog-content" dangerouslySetInnerHTML={createMarkup()} />
      </div>
      <div className="blog-info col-md-3 left-xs">
        <BlogNav
          showSearch={false}
          posts={posts}
        />
      </div>
    </div>
  )
})
