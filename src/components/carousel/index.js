
import React from 'react'
import Carousel from 'nuka-carousel'
//

import './carousel.scss'

export default ({ items, color }) => {
  const settings = {
    autoplay: true,
    autoplayInterval: 5000,
    wrapAround: true,
    speed: 1000,
  }

  return (
    <div className="carousel row full-width center-xs" style={{ backgroundColor: color }}>

      <Carousel {...settings}>
        {items.map(item => (
          <div key={item.__content} className="carousel-item">
            <h2 className="carousel-quote">&ldquo;{item.__content}&rdquo;</h2>
            <h3 className="carousel-client">{item.client}</h3>
          </div>
        )
        )}
      </Carousel>
    </div>
  )
}
