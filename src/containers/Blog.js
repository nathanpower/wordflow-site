
import React from 'react'
import { withRouteData } from 'react-static'
//

import Blog from '../components/blog'

export default withRouteData(({ posts }) => (
  <Blog posts={posts} />
))
