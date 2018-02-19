import React from 'react'
import { withRouteData } from 'react-static'
//
import DetailHeader from './detail-header'

import './service-detail.scss'

export default withRouteData(({ detail }) => (
  <div className="service-detail">
    <DetailHeader heading={detail.title} />
    <div className="detail-body">
      <div className="detail-description row full-width center-xs">
        <h3 className="col-lg-8 col-sm-10 xs-12">{detail.__content}</h3>
      </div>
      <div className="portfolio-items row full-width center-xs">
        {detail.entries.map((item, index) => (
          <div key={item.client} className="portfolio-item row center-xs around-xs col-lg-8 col-sm-10 col-xs-12">
            <div className="portfolio-image col-sm-6 col-xs-12" style={{ order: index % 2 === 0 ? 1 : 2 }} >
              <img alt={item.client} src={`/images/${item.image}`} />
            </div>
            <div
              className="portfolio-text col-sm-6 col-xs-12"
              style={{
                order: index % 2 === 0 ? 2 : 1,
                textAlign: index % 2 === 0 ? 'left' : 'right',
              }}>
              <p>{item.__content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
))
