import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import debounce from 'lodash.debounce'

import BlogNav from './blog-nav'
import BlogMeta from './blog-meta'

import './blog.scss'

class Blog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchQuery: null,
    }
    this.debouncedSearchQuery = debounce(this.handleSearchQuery.bind(this), 300)
  }

  handleSearchQuery (value) {
    if (!value || value === '') {
      return this.setState({ searchQuery: null })
    }

    this.setState({ searchQuery: value })
  }

  filterPosts () {
    const posts = this.props.posts.filter(post => {
      if (this.props.category) {
        return this.props.category.category === post.category
      }

      if (this.props.archive) {
        return this.props.archive === new Date(post.date).getFullYear()
      }

      return true
    })

    const { searchQuery } = this.state

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
    const nav = this.props.history.push

    return (
      <div className="blog-main-container row full-width col-xs-12 center-xs">
        <div className="blog-post-list col-lg-7 col-md-8 col-sm-10 col-xs-12 left-xs">
          {posts.length === 0 && this.renderNoPosts()}
          {posts.map(post => (
            <div className="blog-list-item" key={post.slug} onClick={() => { nav(`/blog/post/${post.slug}`) }}>
              <div className="item-header">
                <h2><Link to={`/blog/post/${post.slug}`}>{post.title}</Link></h2>
              </div>
              <BlogMeta post={post} />
              <div className="item-content">
                <p dangerouslySetInnerHTML={createMarkup(post.summary)} />
              </div>
              <div className="read-more">
                <Link to={`/blog/post/${post.slug}`}>Read more</Link>
              </div>
            </div>
            )
        )}
        </div>
        <div className="blog-info col-md-3 left-xs">
          <BlogNav
            updateSearchQuery={ev => this.debouncedSearchQuery(ev.target.value)}
            posts={this.props.posts}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Blog)
