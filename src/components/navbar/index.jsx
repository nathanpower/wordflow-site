import React from 'react'
import classNames from 'classnames'
import debounce from 'lodash.debounce'

import { SiteData } from 'react-static'
import { NavLink } from 'react-router-dom'
import BurgerIcon from '../icons/burger'
import CancelIcon from '../icons/cancel'
import NavDropdown from './nav-dropdown'
import ClickElseWhere from '../shared/click-elsewhere'

import './navbar.scss'

export default class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dropdownPos: {},
    }
    this.boundToggleMenu = this.toggleMobileMenu.bind(this)
    this.boundToggleDropdown = this.toggleDropdown.bind(this)
    this.boundCloseDropdown = this.closeDropdown.bind(this)
    this.boundSetDropdownRef = this.setDropDownRef.bind(this)
    this.boundSetBurgerMenuRef = this.setBurgerMenuRef.bind(this)
    this.debouncedResize = debounce(this.onResize.bind(this), 300)
  }

  componentDidMount () {
    this.resizeListener = window.addEventListener('resize', this.debouncedResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeListener)
  }

  componentWillReceiveProps (nextProps) {

    const right = this.state.dropdownPos.right;

    if (nextProps.scrolled && !this.props.scrolled) {
      this.setState({ dropdownPos: { top: 50, right } })
    }

    if (!nextProps.scrolled && this.props.scrolled) {
      this.setState({ dropdownPos: { top: 100, right } })
    }
  }

  onResize () {
    this.closeDropdown()
  }

  setDropDownRef (el) {
    const { scrolled } = this.props
    this.dropDownRef = el

    if (this.dropDownRef) {
      const { right } = this.dropDownRef.getBoundingClientRect()
      this.setState({ dropdownPos: { top: scrolled ? 50 : 100, right: window.innerWidth - right } })
    }
  }

  setBurgerMenuRef (el) {
    this.burgerMenuRef = el
  }

  toggleDropdown () {
    const currentVisibility = this.state.dropdownVisible;
    console.log({ currentVisibility })
    this.setState({ dropdownVisible: !currentVisibility })
  }

  closeDropdown () {
    this.setState({ mobileMenuVisible: false, dropdownVisible: false })
  }

  toggleMobileMenu () {
    const currentVisibility = this.state.mobileMenuVisible;
    this.setState({ mobileMenuVisible: !currentVisibility })
  }

  renderDesktopLinks () {
    if (this.state.mobileMenuVisible) {
      return null
    }

    const servicesActive = typeof window !== 'undefined' && window.location.pathname.startsWith('/services');

    return (
      <div className="nav-links row end-sm col-sm-9">
        <div
          role="navigation"
          className={`dropdown-button${servicesActive ? ' nav-active' : ''}`}
          onClick={this.boundToggleDropdown}
          ref={this.boundSetDropdownRef}
        >
          Services
        </div>
        <NavLink activeClassName="nav-active" to="/about">About</NavLink>
        <NavLink activeClassName="nav-active" to="/contact">Contact</NavLink>
        <NavLink activeClassName="nav-active" to="/blog">Blog</NavLink>
      </div>
    )
  }

  renderDesktopDropDown (portfolioLinks) {
    return (
      <ClickElseWhere
        onClick={this.boundCloseDropdown}
        ignoreElement={this.dropDownRef}
      >
        <NavDropdown
          visible={this.state.dropdownVisible}
          position={this.state.dropdownPos}
          items={portfolioLinks}
          itemClickFn={this.boundCloseDropdown}
        />
      </ClickElseWhere>
    )
  }

  renderBurgerMenu () {
    const Icon = this.state.mobileMenuVisible ? CancelIcon : BurgerIcon
    return (
      <button
        type="button"
        className="burger-menu row end-xs col-xs-1"
        onClick={this.boundToggleMenu}
        ref={this.boundSetBurgerMenuRef}
      >
        <Icon />
      </button>
    )
  }

  renderMobileSublinks () {
    return (
      <SiteData>
        {({ portfolioLinks }) => (
          <div>
            {portfolioLinks.map(link => <NavLink className="col-xs-12" to={`/services/${link.slug}`}>{link.title}</NavLink>)}
          </div>
        )}
      </SiteData>
    )
  }

  renderMobileLinks (portfolioLinks) {
    if (!this.state.mobileMenuVisible) {
      return <div className="mobile-nav full-width row start-xs" />
    }

    return (
      <div className="mobile-nav open full-width row start-xs">
      <NavLink className="col-xs-12" to="/about">About</NavLink>
        {portfolioLinks.map(link => (
          <NavLink
            onClick={this.boundCloseDropdown}
            key={link.slug}
            className="col-xs-12"
            to={`/services/${link.slug}`}>{link.title}
          </NavLink>
        ))}
        <NavLink className="col-xs-12" to="/contact">Contact</NavLink>
        <NavLink className="col-xs-12" to="/blog">Blog</NavLink>
      </div>
    )
  }

  render () {
    const { scrolled } = this.props

    return (
      <SiteData>
        {({ portfolioLinks }) => (
          <div>
            <nav className={classNames('full-width row middle-xs center-sm start-xs', { scrolled })}>
              <div className="nav-home row start-xs col-sm-2 col-xs-11">
                <NavLink to="/">WordFlow</NavLink>
              </div>
              {this.renderDesktopLinks()}
              {this.renderBurgerMenu()}
              {this.renderMobileLinks(portfolioLinks)}
            </nav>
            {this.renderDesktopDropDown(portfolioLinks)}
          </div>
        )}
      </SiteData>
    )
  }
}
