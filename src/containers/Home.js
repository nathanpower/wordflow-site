import React from 'react'
import { withRouteData } from 'react-static'

import Header from '../components/header'
import Tagline from '../components/tagline'
import Services from '../components/services'
import Carousel from '../components/carousel'
import CallToAction from '../components/call-to-action'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'

export default withRouteData(({ portfolio, quotes, testimonials }) => (
  <div>
    <Header />
    <Tagline />
    <Services portfolio={portfolio} />
    <Carousel items={quotes} color="#159C92" />
    <CallToAction headerText="Get In Touch" buttonMsg="Contact WordFlow" color="rgb(254, 130, 34)" />
    <Carousel headerText="Testimonials" items={testimonials} color="#A6A6A6" height={180} alignItems="top" />
    <ContactForm />
    <Footer />
  </div>
))
