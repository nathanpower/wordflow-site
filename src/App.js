import React from 'react'
import { Router, Route } from 'react-static'
import Routes from 'react-static-routes'
import Notifications, {notify} from 'react-notify-toast';
//
import ScrollContainer from './components/shared/scroll-container'
import NavBar from './components/navbar'
import Footer from './components/footer'

import './app.scss'

// This is the default renderer for `<Routes>`
const RenderRoutes = ({ getComponentForPath }) => (
  // The default renderer uses a catch all route to receive the pathname
  <Route path="*" render={props => {
    // The pathname is used to retrieve the component for that path
    const Comp = getComponentForPath(props.location.pathname)
    // The component is rendered!
    return (
      <ScrollContainer render={({ scrollTop }) => (
        <React.Fragment>
          <Notifications />
          <NavBar scrolled={scrollTop > 50} />
          <div className="content">
            <Comp key={props.location.pathname} scrollTop={scrollTop} {...props} />
          </div>
          <Footer />
        </React.Fragment>
    )}
    />
    )
  }} />
)

export default () => (
  <Router>
    <Routes render={RenderRoutes} />
  </Router>
)
