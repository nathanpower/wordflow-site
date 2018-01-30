import React from 'react'
import { getSiteProps } from 'react-static'

import Header from '../components/header'
import Tagline from '../components/tagline'

export default getSiteProps(() => (
  <div>
    <Header />
    <Tagline />
  </div>
))
