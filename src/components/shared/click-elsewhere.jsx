import React from 'react'

export default class ClickElsewhere extends React.Component {
  constructor (props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }

  componentDidMount () {
    this.clickListener = document.body.addEventListener('click', this.onClick())
  }

  componentWillUnmount () {
    document.body.removeEventListener('click', this.clickListener)
  }

  setRef (el) {
    this.target = el
  }

  onClick () {
    this.onClick = ev => {
      let target = ev.target

      if (target === this.target || target === this.props.ignoreElement) {
        return
      }

      while (target != null) {
        target = target.parentElement
        if (target === this.target || target === this.props.ignoreElement) {
          return
        }
      }
      this.props.onClick(ev)
    }

    return this.onClick
  }

  render () {
    return (
      <div className={this.props.className} ref={this.setRef}>
        {this.props.children}
      </div>
    )
  }
}
