import React from 'react'

export default class ScrollContainer extends React.Component {
  componentDidMount () {
    this.listener = window.addEventListener('scroll', this.onScroll.bind(this))
    this.setScrollTop()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.listener)
  }

  onScroll () {
    this.setScrollTop()
  }

  setScrollTop () {
    const scrollTop = document.documentElement.scrollTop
    this.node && this.setState({ scrollTop })
  }

  render () {
    return (
      <div ref={node => { this.node = node }}>
        {this.props.render(this.state || {})}
      </div>
    )
  }
}
