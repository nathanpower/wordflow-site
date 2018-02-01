import React from 'react'
import { getRouteProps } from 'react-static'

import Header from '../components/header'
import Tagline from '../components/tagline'
import Services from '../components/services'

export default getRouteProps(({ portfolio }) => (
  <div>
    <Header />
    <Tagline />
    <Services portfolio={portfolio} />
  </div>
))
