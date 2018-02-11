import React from 'react'
import { getRouteProps } from 'react-static'
//
import DetailHeader from './detail-header'

import './service-detail.scss'

export default getRouteProps(({ detail }) => (
  <div className="service-detail">
    <DetailHeader heading={detail.title} />
    <div className="detail-body" />
  </div>
))
