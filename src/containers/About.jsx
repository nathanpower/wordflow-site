
import React from 'react'
import { withRouteData } from 'react-static'
//
import ServiceDetail from '../components/services/service-detail'

export default withRouteData(({ about }) => <ServiceDetail detail={about[0]} />)
