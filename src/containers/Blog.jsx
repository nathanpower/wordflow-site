
import React from 'react'
import { withRouteData } from 'react-static'
//

import Blog from '../components/blog'

export default withRouteData(({ posts, category, archive }) => (
  <Blog posts={posts} category={category} archive={archive} />
))
