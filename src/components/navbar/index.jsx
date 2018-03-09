import React from 'react'
import classNames from 'classnames'
import debounce from 'lodash.debounce'

import { Link, SiteData } from 'react-static'
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
    if (nextProps.scrolled && !this.props.scrolled) {
      this.setState({ dropdownPos: { top: 50, right: this.state.dropdownPos.right } })
    }

    if (!nextProps.scrolled && this.props.scrolled) {
      this.setState({ dropdownPos: { top: 100, right: this.state.dropdownPos.right } })
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
      this.setState({ dropdownPos: { top: scrolled ? 50 : 100, right: innerWidth - right } })
    }
  }

  setBurgerMenuRef (el) {
    this.burgerMenuRef = el
  }

  toggleDropdown () {
    this.setState({ dropdownVisible: !this.state.dropdownVisible })
  }

  closeDropdown () {
    this.setState({ mobileMenuVisible: false, dropdownVisible: false })
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
        <div
          role="navigation"
          className="dropdown-button"
          onClick={this.boundToggleDropdown}
          ref={this.boundSetDropdownRef}
        >
          Services
        </div>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
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
      <SiteData render={({ portfolioLinks }) => (
        <div>
          {portfolioLinks.map(link => <Link className="col-xs-12" to={`/services/${link.slug}`}>{link.title}</Link>)}
        </div>
      )}
      />
    )
  }

  renderMobileLinks (portfolioLinks) {
    if (!this.state.mobileMenuVisible) {
      return <div className="mobile-nav full-width row start-xs" />
    }

    return (
      <div className="mobile-nav open full-width row start-xs">
        {portfolioLinks.map(link => (
          <Link
            onClick={this.boundCloseDropdown}
            key={link.slug}
            className="col-xs-12"
            to={`/services/${link.slug}`}>{link.title}
          </Link>
        ))}
        <Link className="col-xs-12" to="/contact">Contact</Link>
        <Link className="col-xs-12" to="/blog">Blog</Link>
      </div>
    )
  }

  render () {
    const { scrolled } = this.props

    return (
      <SiteData render={({ portfolioLinks }) => (
        <div>
          <nav className={classNames('full-width row middle-xs center-sm start-xs', { scrolled })}>
            <div className="nav-home row start-xs col-sm-2 col-xs-11">
              <Link to="/">WordFlow</Link>
            </div>
            {this.renderDesktopLinks()}
            {this.renderBurgerMenu()}
            {this.renderMobileLinks(portfolioLinks)}
          </nav>
          {this.renderDesktopDropDown(portfolioLinks)}
        </div>
      )} />
    )
  }
}
