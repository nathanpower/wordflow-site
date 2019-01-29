
import React from 'react'
//
import { Link } from 'react-router-dom'

import './call-to-action.scss'

export default ({ headerText, buttonMsg, color }) => (
  <div className="call-to-action" style={{ backgroundColor: color }}>
    <h2>{headerText}</h2>
    <div className="cta-btn-container">
      <Link to="/contact" className="cta-btn">{buttonMsg}</Link>
    </div>
  </div>
)
