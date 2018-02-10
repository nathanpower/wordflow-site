import React from 'react'
import { getRouteProps } from 'react-static'
//
import DetailHeader from './detail-header'

export default getRouteProps(({ detail }) => (
  <div className="service-detail">
    <DetailHeader heading={detail.category} />
  </div>
))
