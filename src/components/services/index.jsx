
import React from 'react'
//
import ServiceItem from './service-item'

import './services.scss'

export default ({ portfolio }) => (
  <div className="services-container">
    <div className="services row full-width center-xs">
      { portfolio.map((item, index) => <ServiceItem item={item} index={index} key={item.slug} />)}
    </div>
  </div>
)
