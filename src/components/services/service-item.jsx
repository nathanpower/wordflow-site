
import React from 'react'
//
import { Link } from 'react-static'

import './service-item.scss'

export default ({ item, index }) => (
  <div className="service-item-container col-md-4 col-sm-9 col-xs-12">
    <Link
      to={`services/${item.slug}`}
      className="service-item"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '230px',
        background: `url('./images/${item.thumbnail}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '15px',
        marginBottom: 60,
        cursor: 'pointer',
      }}
    >
      <div
        className="service-title"
        style={{
          height: 50,
          width: '70%',
          background: index === 0 ? '#159C92' : index % 3 === 0 ?
            '#159C92' : (index - 1)% 3 === 0 ? '#FE8222' : '#6389D4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          top: 25,
          borderRadius: 25,
        }}
      >
        <h3 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 300,
          fontSize: '1.4rem',
          color: 'white',
        }}
        >
          {item.title}
        </h3>
      </div>
    </Link>
  </div>
)
