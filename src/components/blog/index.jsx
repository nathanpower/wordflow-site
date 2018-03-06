import React from 'react'
import { Link } from 'react-static'

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

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`
  }

  render () {
    const { posts } = this.props
    const createMarkup = html => ({ __html: html })

    return (
      <div className="blog-main-container row full-width col-xs-12 center-xs">
        <div className="blog-post-list col-md-5 col-sm-7 col-xs-10 left-xs">
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
        <div className="blog-info col-sm-3 left-xs" />
      </div>
    )
  }
}
