import React from 'react'
import classNames from 'classnames'
//
import DetailHeader from './detail-header'

import './service-detail.scss'

export default (({ detail }) => {
  const imgLoadedHandler = el => {
    if (el) {
      el.addEventListener('load', () => {
        el.parentElement.classList.add('loaded')
      })
    }
  }

  const renderImage = item => (
    <a className="screenshot" href={item.link}>
      <h4 className="item-title">{item.client}</h4>
      <img alt={item.client} src={`/images/${item.image}`} ref={el => imgLoadedHandler(el)} />
    </a>
  )

  const renderVideo = item => (
    <div className="video">
      <iframe
        src={item.video}
        width="100%"
        height="100%"
        frameBorder="0"
        title={item.title}
        allowFullScreen />
    </div>
  )

  return (
    <div className="service-detail">
      <DetailHeader heading={detail.title} />
      <div className="detail-body row full-width center-xs">
        <div className="detail-description row center-xs col-lg-10 col-md-11 col-xs-12">
          <h3 className="col-lg-9 col-md-10 col-xs-11">{detail.__content}</h3>
        </div>
        <div className="portfolio-items row full-width center-xs">
          {detail.entries.map(item => {
            return (
              <div key={item.client} className="portfolio-item row col-lg-10 col-md-11 col-xs-12">
                <div className="item-content">
                  {item.image && renderImage(item)}
                  {item.video && renderVideo(item)}
                  <h3>{item.client}</h3>
                  <p>{item.__content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
})
