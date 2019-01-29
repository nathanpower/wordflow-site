
import React from 'react'
import debounce from 'lodash.debounce'
//
import { Link } from 'react-router-dom'

import './service-item.scss'

export default class ServiceItem extends React.Component {
  constructor (props) {
    super(props)
    this.boundSetRef = this.setRef.bind(this)
    this.boundSetHeight = debounce(this.setHeight.bind(this), 30, { leading: true })
    this.state = {
      height: 230,
    }
  }

  componentDidMount () {
    this.resizeListener = window.addEventListener('resize', this.boundSetHeight)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeListener)
  }

  setRef (ref) {
    this.elRef = ref
    this.setHeight()
  }

  setHeight () {
    if (this.elRef) {
      const { width } = this.elRef.getBoundingClientRect()
      this.setState({ height: width * 0.575 })
    }
  }

  render () {
    const { item } = this.props
    return (
      <div ref={this.boundSetRef} className="service-item-container col-md-4 col-sm-9 col-xs-12">
        <Link

          to={`/services/${item.slug}`}
          className="service-item"
          style={{
            height: this.state.height,
            background: `url('./images/${item.thumbnail}')`,
          }}
        >
          <div className="overlay" />
          <div
            className="service-title"
          >
            <h3>
              {item.title}
            </h3>
          </div>
        </Link>
      </div>
    )
  }
}
