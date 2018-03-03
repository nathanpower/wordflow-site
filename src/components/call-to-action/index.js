
import React from 'react'
//
import { Link } from 'react-static'

import './call-to-action.scss'

export default ({ headerMsg, buttonMsg, color }) => {
  return (
    <div className="call-to-action" style={{ backgroundColor: color }}>
      <h2>{headerMsg}</h2>
      <div className="cta-btn-container">
        <Link to="/contact" className="cta-btn">{buttonMsg}</Link>
      </div>
    </div>
  )
}
