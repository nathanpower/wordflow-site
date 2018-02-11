
import React from 'react'
//
import './detail-header.scss'

import ScrollContainer from '../scroll-container'

export default ({ heading }) => (
  <ScrollContainer render={({ scrollTop }) => {
    const darken = 255 - (scrollTop || 0)
    // const lighten = Math.min(scrollTop, 255)
    const backgroundColor = scrollTop ? `rgb(${darken}, ${darken}, ${darken})` : 'white'
    // const color = scrollTop ? `rgb(${lighten}, ${lighten}, ${lighten})` : 'black'
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
            // color,
          }}>{heading}</h1>
        </div>
      </div>
    )
  }}
  />
)
