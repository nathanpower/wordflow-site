
import React from 'react'
//
import './detail-header.scss'

import ScrollContainer from '../shared/scroll-container'

export default ({ heading }) => (
  <ScrollContainer render={({ scrollTop }) => {
    const darken = 247 - (scrollTop || 0)
    const backgroundColor = scrollTop ? `rgb(${darken}, ${darken}, ${darken})` : '#F7F7F7'
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
