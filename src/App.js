import React from 'react'
import { Router } from 'react-static'
//
import Routes from 'react-static-routes'
import ScrollContainer from './components/scroll-container'
import NavBar from './components/navbar'

import './app.scss'

export default () => (
  <ScrollContainer render={({ scrollTop }) => (
    <Router>
      <div>
        <NavBar scrolled={scrollTop > 50} />
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  )}
  />
)
