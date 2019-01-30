
import React from 'react'
//
import { Link } from 'react-router-dom'
import Slugify from 'slugify';

export default (({ post, showDescription=false }) => {
  const formatDate = date => {
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

  const date = formatDate(new Date(post.date))

  return (
    <div className="item-meta">
      <span>{date} in <Link
        onClick={e => e.stopPropagation()}
        to={`/blog/category/${Slugify(post.category.toLowerCase())}`}
      >{post.category}</Link> by <Link
        onClick={e => e.stopPropagation()}
        to="/about"
      >{post.author}</Link></span>
      { (showDescription && post.description) ?
        <div className="item-description"><span>{post.description}</span></div> : null }
    </div>
  )
})
