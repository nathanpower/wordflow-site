import React from 'react'
import { withRouteData } from 'react-static'

import Header from '../components/header'
import Tagline from '../components/tagline'
import Services from '../components/services'
import Carousel from '../components/carousel'
import CallToAction from '../components/call-to-action'

export default withRouteData(({ portfolio, quotes }) => (
  <div>
    <Header />
    <Tagline />
    <Services portfolio={portfolio} />
    <Carousel items={quotes} color="#159C92" />
    <CallToAction headerMsg="Get In Touch" buttonMsg="Contact WordFlow" color="rgb(254, 130, 34)" />
  </div>
))
