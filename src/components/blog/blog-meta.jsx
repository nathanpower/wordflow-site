
import React from 'react'
//

export default (({ post }) => {
  const formatDate = (date) => {
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

  const dateArgs = post.date.split('-').map((num, idx) => idx === 1 ? parseInt(num) - 1 : parseInt(num))
  const date = formatDate(new Date(...dateArgs))

  return (
    <div className="item-meta">
      <span>{date} in <a href="#">{post.category}</a> by <a href="#">{post.author}</a></span>
    </div>
  )
})
