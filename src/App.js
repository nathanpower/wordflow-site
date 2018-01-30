import React from 'react'
import { Router, Link } from 'react-static'
import classNames from 'classnames'
//
import Routes from 'react-static-routes'
import ScrollContainer from './components/scroll-container'
import NavBar from './components/navbar'
import BurgerIcon from './components/icons/burger'


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
