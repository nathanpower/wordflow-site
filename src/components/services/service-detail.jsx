import React from 'react'

//
import DetailHeader from './detail-header'

import './service-detail.scss'

export default (({ detail }) => (
  <div className="service-detail">
    <DetailHeader heading={detail.title} />
    <div className="detail-body">
      <div className="detail-description row full-width center-xs">
        <h3 className="col-lg-8 col-sm-10 xs-12">{detail.__content}</h3>
      </div>
      <div className="portfolio-items row full-width center-xs">
        {detail.entries.map(item => (
          <div key={item.client} className="portfolio-item row col-lg-10 col-md-11 col-xs-12">
            <div className="item-content">
              {item.image && <img alt={item.client} src={`/images/${item.image}`} />}
              {item.video &&
                <iframe src={item.video} width="100%" height="100%" frameBorder="0" title={item.title} allowFullScreen />}
              <h3>{item.client}</h3>
              <p>{item.__content}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  </div>
))
