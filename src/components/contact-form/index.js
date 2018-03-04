import React from 'react'

import './contact-form.scss'

import PhoneIcon from '../icons/phone'
import MailIcon from '../icons/mail'

export default class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  encode (data) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit (e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render () {
    return (
      <div className="contact-form-container row center-xs middle-xs around-xs col-xs-12">
        <div className="contact-form col-md-7 col-sm-10 col-xs-12 row center-xs">
          <h5 className="col-xs-12 phone-cta">Give us a call</h5>
          <address>
            <h2 className="col-xs-12 phone-number">
              <span><PhoneIcon /></span>
              <span className="number-text">+353 89 4262725</span>
            </h2>
            <a className="col-xs-12 email-address" href="mailto:rapower82@gmail.com">
              <span><MailIcon color="#8d8d8d" /></span>
              <span className="email-text">rapower82@gmail.com</span>
            </a>
          </address>

          <form
            className="contact-form row col-xs-12 center-xs between-xs"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input hidden name="bot-field" />
            <input onChange={this.handleChange} placeholder="Your name *" name="name" type="text" className="text-input col-sm-4 col-xs-12" />
            <input onChange={this.handleChange} placeholder="Your email *" name="email" type="text" className="text-input col-sm-7 col-xs-12" />
            <input onChange={this.handleChange} placeholder="Subject" name="subject" type="text" className="text-input col-xs-12" />
            <textarea onChange={this.handleChange} cols="40" rows="12" name="message" placeholder="Your message *" type="text" className="multiline-input col-xs-12" />
            <div className="btn-container row center-xs middle-xs around-xs col-xs-12">
              <input value="submit" type="submit" className="contact-submit-btn" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
