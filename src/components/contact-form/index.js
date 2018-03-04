import React from 'react'

import './contact-form.scss'

import PhoneIcon from '../icons/phone'
import MailIcon from '../icons/mail'

export default class ContactForm extends React.Component {
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

          <form className="row col-xs-12 center-xs between-xs">
            <input placeholder="Your name *" type="text" className="col-sm-4 col-xs-12" />
            <input placeholder="Your email *" type="text" className="col-sm-7 col-xs-12" />
            <input placeholder="Subject" type="text" className="col-xs-12" />
            <textarea cols="40" rows="12" placeholder="Your message *" type="text" className="col-xs-12" />
          </form>
        </div>
      </div>
    )
  }
}
