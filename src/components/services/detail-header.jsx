
import React from 'react'
//
import './detail-header.scss'

import ScrollContainer from '../shared/scroll-container'

export default ({ heading }) => (
  <ScrollContainer render={({ scrollTop }) => {
    const darken = 255 - (scrollTop || 0)
    const backgroundColor = scrollTop ? `rgb(${darken}, ${darken}, ${darken})` : 'white'
    return (
      <div
        className="detail-header-container"
        style={{
          backgroundColor,
        }}
      >
        <div className="detail-logo">
          <img src="../../images/logo-trans-no-text.png" width="400" alt="wordflow-logo" />
        </div>
        <div className="detail-heading">
          <h1 style={{
          }}>{heading}</h1>
        </div>
      </div>
    )
  }}
  />
)
