
import React from 'react'
import { withRouteData } from 'react-static'
//
import Services from '../components/services'

export default withRouteData(({ portfolio }) => <Services portfolio={portfolio} />)
