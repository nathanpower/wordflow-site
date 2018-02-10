
import React from 'react'
//
import './detail-header.scss'

export default ({ heading }) => (
  <div className="detail-header-container">
    <div className="detail-logo">
      <img src="../../images/logo-no-text.jpg" width="400" alt="wordflow-logo" />
    </div>
    <div className="detail-heading">
      <h1>{heading}</h1>
    </div>
  </div>
)
