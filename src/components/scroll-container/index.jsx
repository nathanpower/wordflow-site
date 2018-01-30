import React from 'react'

export default class ScrollContainer extends React.Component {
  componentDidMount () {
    document.addEventListener('scroll', this.onScroll.bind(this))
    this.setScrollTop()
  }

  onScroll () {
    this.setScrollTop()
  }

  setScrollTop () {
    const scrollTop = document.documentElement.scrollTop
    this.setState({ scrollTop })
  }

  render () {
    return (
      <div ref={node => { this.node = node }}>
        {this.props.render(this.state || {})}
      </div>
    )
  }
}
