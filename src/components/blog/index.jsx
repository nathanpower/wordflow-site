import React from 'react'
import { Link } from 'react-static'
import debounce from 'lodash.debounce'

import BlogNav from './blog-nav'

import './blog.scss'

export default class Blog extends React.Component {
  constructor (props) {
    console.log('constructor called')
    super(props)
    this.state = {
      searchQuery: null,
    }
    this.debouncedSearchQuery = debounce(this.handleSearchQuery.bind(this), 300)
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

  handleSearchQuery (value) {
    if (!value || value === '') {
      return this.setState({ searchQuery: null })
    }

    this.setState({ searchQuery: value })
  }

  filterPosts () {
    const { posts } = this.props
    const { searchQuery } = this.state

    console.log(searchQuery)

    if (!searchQuery) {
      return posts
    }

    const match = post => post.title.includes(searchQuery) || post.html.includes(searchQuery)

    return posts.filter(match)
  }

  renderNoPosts () {
    return (
      <div className="blog-list-item">
        <div className="item-header">
          <h2 className="no-posts">No posts match search criteria</h2>
        </div>
      </div>
    )
  }

  render () {
    const posts = this.filterPosts()
    const createMarkup = html => ({ __html: html })

    return (
      <div className="blog-main-container row full-width col-xs-12 center-xs">
        <div className="blog-post-list col-lg-6 col-md-7 col-sm-9 col-xs-11 left-xs">
          {posts.length === 0 && this.renderNoPosts()}
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
            updateSearchQuery={ev => this.debouncedSearchQuery(ev.target.value)}
            posts={posts}
          />
        </div>
      </div>
    )
  }
}
