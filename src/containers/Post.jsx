import React from 'react'
import { withRouteData } from 'react-static'
//
import BlogPost from '../components/blog/blog-post'

export default withRouteData(({ post, posts }) => (<BlogPost post={post} posts={posts} />))
