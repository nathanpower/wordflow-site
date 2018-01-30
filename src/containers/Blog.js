
import React from 'react'
import { getRouteProps, Link } from 'react-static'
//
import './blog.scss'

export default getRouteProps(({ posts }) => (
  <div className="blog">
    <h1>It’s blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
