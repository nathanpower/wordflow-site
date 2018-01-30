import React from 'react'
import { getSiteProps } from 'react-static'

import Header from '../components/header'
import Tagline from '../components/tagline'
import Services from '../components/services'

export default getSiteProps(() => (
  <div>
    <Header />
    <Tagline />
    <Services />
  </div>
))
