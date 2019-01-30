import React from 'react'
import { Routes, Root } from 'react-static'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';


import Notifications from 'react-notify-toast';
//
import ScrollContainer from './components/shared/scroll-container'
import NavBar from './components/navbar'
import Footer from './components/footer'

import './app.scss'

// This is the default renderer for `<Routes>`
const RenderRoutes = ({ getComponentForPath }) => (
  // The default renderer uses a catch all route to receive the pathname
  <Route path='*'>
    {props => {
      // The pathname is used to retrieve the component for that path
      const Comp = getComponentForPath(props.location.pathname)

      // The component is rendered!
      return (
        <ScrollContainer render={({ scrollTop }) => (
          <React.Fragment>
            <Notifications />
            <NavBar scrolled={scrollTop > 50} />
            <div className='content'>
              <Comp key={props.location.pathname} scrollTop={scrollTop} {...props} />
            </div>
            <Footer />
          </React.Fragment>
        )}
      />
      )
    }}
  </Route>
)

// TODO: Remove the extra <Link /> components when https://github.com/nozzle/react-static/issues/569 is fixed
export default () => (
  <Root>
    <div>
      <Link to='/' />
      <Link to='/services/website-copy' />
      <Link to='/services/blog-creation' />
      <Link to='/services/video-scripts' />
      <Link to='/services/copy-editing' />
      <Link to='/services/social-media' />
      <Link to='/services/writer-for-hire' />
      <Link to='/services' />
      <Link to='/contact' />
      <Link to='/about' />
      <Link to='/blog' />
      <Link to='/blog/post/windows-doors-and-sliders:-how-big-is-too-big' />
      <Link to='/blog/post/triple-glazing-is-it-worth-it' />
      <Link to='/blog/post/buying-windows-how-long-should-my-lead-time-be' />
      <Link to='/blog/post/the-amazing-possibilities-of-schuco' />
      <Link to='/blog/post/explainer:-10-terms-to-understand-when-buying-windows' />
      <Link to='/blog/post/five-questions-people-ask-when-buying-windows' />
      <Link to='/blog/post/alu-clad:-what-it-is-and-why-you-want-it' />
      <Link to='/blog/post/the-new-wonder-wood-for-windows' />
      <Link to='/blog/post/passive-house-builds' />
      <Link to='/blog/post/never-say-die!-a-blog-on-the-power-of-resilience' />
      <Link to='/blog/post/the-path-of-forgiveness' />
      <Link to='/blog/post/entering-the-global-marketplace' />
      <Link to='/blog/post/the-shifting-sands-of-brazil' />
      <Link to='/blog/post/why-irish-eyes-are-smiling' />
      <Link to={`/blog/post/is-japan-falling-on-it's-sword'`} />
      <Link to='/blog/post/releasing-the-happiness-within' />
      <Link to='/blog/post/italy-a-country-divided' />
      <Link to='/blog/post/from-success-to-significance' />
      <Link to='/blog/post/the-rise-and-rise-of-china' />
      <Link to='/blog/post/finding-your-flow' />
      <Link to='/blog/post/the-french-conundrum' />
      <Link to='/blog/post/meanwhile-in-waterford' />
      <Link to='/blog/category' />
      <Link to='/blog/category/glazing-industry' />
      <Link to='/blog/category/self-help' />
      <Link to='/blog/category/economics' />
      <Link to='/blog/category/opinion' />
      <Link to='/blog/archive' />
      <Link to='/blog/archive/2018' />
      <Link to='/blog/archive/2017' />
      <Link to='/blog/archive/2016' />
      <Link to='/blog/archive/2015' />
    </div>
    <Routes>{RenderRoutes}</Routes>
  </Root>
)
