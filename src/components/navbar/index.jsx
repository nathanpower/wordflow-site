import React from 'react'
import classNames from 'classnames'

import { Link } from 'react-static'
import BurgerIcon from '../icons/burger'
import CancelIcon from '../icons/cancel'

import './navbar.scss'

export default class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.boundToggleMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu () {
    this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible })
  }

  renderDesktopLinks () {
    if (this.state.mobileMenuVisible) {
      return null
    }

    return (
      <div className="nav-links row end-sm col-sm-9">
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
    )
  }

  renderBurgerMenu () {
    const Icon = this.state.mobileMenuVisible ? CancelIcon : BurgerIcon
    return (
      <switch className="burger-menu row end-xs col-xs-1" onClick={this.boundToggleMenu}>
        <Icon />
      </switch>
    )
  }

  renderMobileLinks () {
    if (!this.state.mobileMenuVisible) {
      return <div className="mobile-nav full-width row start-xs" />
    }

    return (
      <div className="mobile-nav open full-width row start-xs">
        <Link className="col-xs-12" to="/">Services</Link>
        <Link className="col-xs-12" to="/about">About Us</Link>
        <Link className="col-xs-12" to="/testimonials">Testimonial</Link>
        <Link className="col-xs-12" to="/contact">Contact</Link>
        <Link className="col-xs-12" to="/blog">Blog</Link>
      </div>
    )
  }

  render () {
    const { scrolled } = this.props

    return (
      <nav className={classNames('full-width row middle-xs center-sm start-xs', { scrolled })}>
        <div className="nav-home row start-xs col-sm-2 col-xs-11">
          <Link to="/">WordFlow</Link>
        </div>
        {this.renderDesktopLinks()}
        {this.renderBurgerMenu()}
        {this.renderMobileLinks()}
      </nav>
    )
  }
}
