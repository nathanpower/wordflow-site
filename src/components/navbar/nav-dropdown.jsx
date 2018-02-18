
import React from 'react'
import classNames from 'classnames'
//
import { Link } from 'react-static'

import './dropdown.scss'

export default ({ position, visible, items, itemClickFn }) => (
  <div
    className={classNames('nav-dropdown', { visible })}
    style={{
      top: position.top,
      right: position.right,
    }}
  >
    <ul>
      {items.map(link => (
        <li onClick={itemClickFn} key={link.slug}>
          <Link activeClassName="active" to={`/services/${link.slug}`}>{link.title}</Link>
        </li>)
      )}
    </ul>
  </div>
)
