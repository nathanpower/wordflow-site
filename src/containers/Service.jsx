
import React from 'react'
import { withRouteData } from 'react-static'
//
import ServiceDetail from '../components/services/service-detail'

export default withRouteData(({ detail }) => <ServiceDetail detail={detail} />)
