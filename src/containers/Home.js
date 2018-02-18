import React from 'react'
import { withRouteData } from 'react-static'

import Header from '../components/header'
import Tagline from '../components/tagline'
import Services from '../components/services'

export default withRouteData(({ portfolio }) => (
  <div>
    <Header />
    <Tagline />
    <Services portfolio={portfolio} />
  </div>
))
