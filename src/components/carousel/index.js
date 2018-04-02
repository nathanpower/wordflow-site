
import React from 'react'
import Carousel from 'nuka-carousel'
//

import './carousel.scss'

export default ({ items, color, headerText, alignItems='center', height=285, id }) => {
  const settings = {
    autoplay: true,
    autoplayInterval: 5000,
    wrapAround: true,
    speed: 1000,
  }

  return (
    <div id={id} className="carousel row full-width center-xs" style={{ backgroundColor: color }}>

      {
        headerText
          ? <h2 className="carousel-header">{headerText}</h2>
          : null
      }
      <Carousel {...settings}>
        {items.map(item => {
          const quote = item.__content.replace('\n', '').trim()
          return (
            <div key={item.__content} className="carousel-item" style={{ height, alignItems }}>
              {
                !headerText
                  ? <h2 className="carousel-quote">&ldquo;{quote}&rdquo;</h2>
                  : (
                    <h5 className="carousel-quote">&ldquo;{quote}&ldquo;</h5>
                  )
              }
              {
                (headerText && item.author)
                  ? <p className="quote-author">{item.author}</p>
                  : null
              }
              <h6 className="carousel-client">{item.client}</h6>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
