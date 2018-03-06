import React from 'react'
import { Link } from 'react-static'

import BlogNav from './blog-nav'

import './blog.scss'

export default class Blog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  formatDate (date) {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December',
    ]

    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    return `${monthNames[monthIndex]} ${day}, ${year}`
  }

  render () {
    const { posts } = this.props
    const createMarkup = html => ({ __html: html })

    return (
      <div className="blog-main-container row full-width col-xs-12 center-xs">
        <div className="blog-post-list col-lg-6 col-md-7 col-sm-9 col-xs-11 left-xs">
          {posts.map(post => {
            const dateArgs = post.date.split('-').map((num, idx) => idx === 1 ? parseInt(num) - 1 : parseInt(num))
            const date = this.formatDate(new Date(...dateArgs))

            return (
              <div className="blog-list-item" key={post.slug}>
                <div className="item-header">
                  <h2><Link to={`/blog/post/${post.slug}/`}>{post.title}</Link></h2>
                </div>
                <div className="item-meta">
                  <span>{date} in <a href="#">{post.category}</a> by <a href="#">{post.author}</a></span>
                </div>
                <div className="item-content">
                  <p dangerouslySetInnerHTML={createMarkup(post.summary)} />
                </div>
                <div className="read-more">
                  <Link to={`/blog/post/${post.slug}/`}>Read more</Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="blog-info col-lg-2 col-md-3 left-xs">
          <BlogNav
            updateSearchQuery={q => console.log(q.target.value)}
            posts={posts}
          />
        </div>
      </div>
    )
  }
}
