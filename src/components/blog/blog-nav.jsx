
import React from 'react'
//
import { Link } from 'react-router-dom'

import './blog-nav.scss'

export default ({ updateSearchQuery, posts, showSearch=true }) => (
  <div className="blog-nav row start-xs col-xs-12">
    { showSearch ?
      <div className="blog-search col-xs-12">
        <span className="icon-search" />
        <input className="search-input" type="search" placeholder="Search" onChange={updateSearchQuery} />
      </div> : null }


    <div className="blog-nav-section col-xs-12">
      <h4 className="section-title"><span className="icon-radio-unchecked" />Categories</h4>
      {posts.reduce((memo, post) => {
        if (!memo.find(p => p.category === post.category)) {
          memo.push({ category: post.category, path: `/blog/category/${post.categorySlug}` })
        }
        return memo
      }, [{ category: 'All', path: '/blog' }]).map(({ category, path }) => (
        <div key={category} className="section-link">

          <Link
            to={path}
            className={typeof window !== 'undefined' && window.location.pathname !== '/blog' && path !== window.location.pathname ? '' : 'active'}
          >
            {category}
          </Link>
        </div>
      ))}
    </div>

    <div className="blog-nav-section col-xs-12">
      <h4 className="section-title"><span className="icon-radio-unchecked" />Recent Posts</h4>
      {posts.filter((post, index) => index < 5).map(post => (
        <div key={post.slug} className="section-link">
          <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
        </div>
      ))}
    </div>

    <div className="blog-nav-section col-xs-12">
      <h4 className="section-title"><span className="icon-radio-unchecked" />Archive</h4>
      {posts.reduce((memo, post) => {
        const year = new Date(post.date).getFullYear()
        if (!memo.includes(year)) memo.push(year)
        return memo
      }, []).sort((a, b) => a < b ? 1 : -1).map(year => (
        <div key={year} className="section-link">
          <Link to={`/blog/archive/${year}`}>{year}</Link>
        </div>
      ))}
    </div>
  </div>
)
