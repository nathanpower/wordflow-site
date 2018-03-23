
import React from 'react'
import styled from 'styled-components'
import { Form, Text, TextArea } from 'react-form'
import axios from 'axios'

const Contact = styled.div`
  z-index: 10000;
  padding: 5rem 2rem;
  background: rgba(19, 18, 15, 0.95);
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  position: relative;
  :after {
    content: '';
    display: block;
    z-index: 9998;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 1rem 0;
    border-bottom: 5px solid rgba(193, 150, 32, 0.8);
  }
  .header {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    text-shadow: 0 0 0.05rem black, 0 0 0.05rem black;
  }
  form {
    margin: 2rem 0 1rem;
    > div {
      width: 400px;
      max-width: 100%;
      margin: 0 auto;
      margin-bottom: 1rem;
      > div {
        display: block;
        margin-bottom: 0.2rem;
        font-size: 0.9rem;
        text-align: left;
        opacity: 0.6;
      }
      input {
        display: block;
      }
    }
    input,
    textarea {
      border: 0;
      background: rgba(0, 0, 0, 0.3);
      color: white;
      padding: 0.7rem;
      width: 100%;
      font-size: 1rem;
      border-radius: 0.3rem;
    }
    button {
      border: 0;
      border-radius: 0.3rem;
      background: rgb(198, 79, 104);
      color: white;
      appearance: none;
      padding: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.1s ease-out;
      :hover {
        transform: scale(1.2);
        background: rgb(191, 44, 75);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .thanks {
    padding: 1rem;
    color: rgb(254, 108, 138);
  }
  .columns {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-shadow: 0 0 0.08rem black, 0 0 0.08rem black;
  }
  .column {
    flex: 1 1 500px;
    padding: 1rem;
    max-width: 20rem;
    font-size: 1rem;
    line-height: 2rem;
  }
  .phone {
    display: block;
    text-decoration: none;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    border-radius: 0.3rem;
    margin: 0.5rem;
  }
`

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export default class extends React.Component {
  state = {
    submitted: false,
  }
  render () {
    return (
      <Contact id="contact">
        <div className="header">Contact Us</div>
        {this.state.submitted ? (
          <p className="thanks">
            Thanks for submitting your information! We'll be in contact with you as soon as
            possible.
          </p>
        ) : (
          <Form
            onSubmit={async values => {
              try {
                await axios.post('/', encode({ 'form-name': 'contact', ...values }), {
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                })
                this.setState({ submitted: true })
              } catch (err) {
                window.alert(
                  'There was a problem submitting your form! Try again or reload the page :)',
                )
                this.setState({ submitted: true })
              }
            }}
          >
            {({ submitForm }) => (
              <form name="contact" netlify="true" onSubmit={submitForm}>
                <div>
                  <div>Name</div>
                  <Text field="name" name="name" placeholder="John Doe" />
                </div>
                <div>
                  <div>Email</div>
                  <Text field="email" name="email" placeholder="johndoe@gmail.com" />
                </div>
                <div>
                  <div>Phone</div>
                  <Text field="phone" name="phone" placeholder="(555) 555-555" />
                </div>
                <div>
                  <div>Message</div>
                  <TextArea
                    field="message"
                    name="message"
                    rows="5"
                    placeholder="Your message to us :)"
                  />
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            )}
          </Form>
        )}
        <div className="columns">
          <div className="column">
            Or give us a call for more information about our building and services. We are happy to
            assist you in planning your upcoming event.
          </div>
          <div className="column">
            <div>City View Receptions</div>
            <div>1001 East 11th Avenue, Suite B</div>
            <div>Salt Lake City, UT 84103</div>
            <a href="tel:+8012901267" className="phone">
              (801) 290 - 1267
            </a>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy; {new Date().getYear() + 1900} City View Receptions
        </div>
      </Contact>
    )
  }
}
