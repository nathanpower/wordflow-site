import React from 'react'
//
import { withRouter } from 'react-router'
import DetailHeader from './detail-header'

import './service-detail.scss'

const serviceDetail = (({ detail={}, history }) => {
  const nav = history.push
  const createMarkup = html => ({ __html: html })
  const imgLoadedHandler = el => {
    if (el) {
      el.addEventListener('load', () => {
        el.parentElement.classList.add('loaded')
      })
    }
  }

  const renderHeroImage = () => {
    if (!detail.heroImage) {
      return null
    }

    const info = detail.heroImageInfo || ''
    return (
      <div className="row full-width center-xs">
        <div className="hero-img-wrapper">
          <img src={`/images/${detail.heroImage}`} alt={info} title={info} />
        </div>
      </div>
    )
  }

  const renderImage = item => (
    <a className="screenshot" href={item.link} rel="noopener noreferrer" target="_blank" onClick={e => {
      const isInternalLink = !item.link.includes('://')
      if (isInternalLink) { // internal
        e.preventDefault()
        nav(item.link)
      }
    }}>
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

  const style = detail.heroImage ? { borderTop: 'none', paddingTop: 0 } : null

  return (
    <div className="service-detail">
      <DetailHeader heading={detail.title} />
      {renderHeroImage()}
      <div className="detail-body row full-width center-xs">
        <div className="detail-description row center-xs col-lg-10 col-md-11 col-xs-12" style={style}>

          <h3 className="row col-lg-9 col-md-10 col-sm-11 col-xs-12" dangerouslySetInnerHTML={createMarkup(detail.html)} />
        </div>
        <div className="portfolio-items row full-width center-xs">
          {Array.isArray(detail.entries) && detail.entries.map(item => (
            <div key={item.client} className="portfolio-item row col-lg-10 col-md-11 col-xs-12">
              <div className="item-content">
                {item.image && renderImage(item)}
                {item.video && renderVideo(item)}
                <h3>{item.client}</h3>
                <p>{item.__content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default withRouter(serviceDetail)
