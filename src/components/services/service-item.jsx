
import React from 'react'
//
import { Link } from 'react-static'

import './service-item.scss'

export default ({ item }) => (
  <div className="service-item-container col-md-4 col-sm-9 col-xs-12">
    <Link
      to={`/services/${item.slug}`}
      className="service-item"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '230px',
        background: `url('./images/${item.thumbnail}')`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        margin: '15px',
        marginBottom: 60,
        cursor: 'pointer',
      }}
    >
      <div className="overlay" />
      <div
        className="service-title"
        style={{
          height: 50,
          width: '70%',
          background: '#159C92',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          top: 25,
          borderRadius: 25,
          border: '2px solid #159C92',
        }}
      >
        <h3>
          {item.title}
        </h3>
      </div>
    </Link>
  </div>
)
