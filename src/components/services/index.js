
import React from 'react'
//

import './services.scss'

export default ({ portfolio }) => (
  <div className="services-container">
    { portfolio.map(item => <div>{item.category}</div>)}
  </div>
)
