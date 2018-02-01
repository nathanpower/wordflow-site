
import React from 'react'
//

import './service-item.scss'

export default ({ item, index }) => (
  <div className="service-item-container col-lg-3 col-md-4 col-sm-9 col-xs-12">
    <div
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
          height: 60,
          width: '70%',
          background: index % 3 === 0 ? '#159C92' : index % 2 === 0 ? '#6389D4' : '#FE8222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          top: 30,
          borderRadius: 30,
        }}
      >
        <h3 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 300,
          fontSize: '1.4rem',
          color: 'white',
        }}>
          {item.category}
        </h3>
      </div>
    </div>
  </div>
)

