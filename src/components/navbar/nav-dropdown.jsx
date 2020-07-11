
import React from 'react'
import classNames from 'classnames'
//
import { NavLink } from 'react-router-dom'

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
          <NavLink activeClassName="nav-active" className="active" to={`/services/${link.slug}`}>{link.title}</NavLink>
        </li>)
      )}
    </ul>
  </div>
)
