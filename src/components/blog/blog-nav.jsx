
import React from 'react'
//
import { Link } from 'react-static'

import './blog-nav.scss'

export default ({ updateSearchQuery, posts }) => (
  <div className="blog-nav row start-xs col-xs-12">
    <div className="blog-search col-xs-12">
      <span className="icon-search" />
      <input className="search-input" type="search" placeholder="Search" onChange={updateSearchQuery} />
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
      <h4 className="section-title"><span className="icon-radio-unchecked" />Categories</h4>
      {posts.reduce((memo, post) => {
        if (!memo.includes(post.category)) memo.push(post.category)
        return memo
      }, []).map(category => (
        <div key={category} className="section-link">
          <Link to={`/blog/category/${category}`}>{category}</Link>
        </div>
      ))}
    </div>

    <div className="blog-nav-section col-xs-12">
      <h4 className="section-title"><span className="icon-radio-unchecked" />Archive</h4>
      {posts.reduce((memo, post) => {
        const dateArgs = post.date.split('-').map((num, idx) => idx === 1 ? parseInt(num) - 1 : parseInt(num))
        const year = new Date(...dateArgs).getFullYear()
        if (!memo.includes(year)) memo.push(year)
        return memo
      }, []).sort().map(year => (
        <div key={year} className="section-link">
          <Link to={`/blog/archive/${year}`}>{year}</Link>
        </div>
      ))}
    </div>
  </div>
)
