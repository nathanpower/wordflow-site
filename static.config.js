import { getContent, getPortfolioContent, getPortfolioLinks } from './src/utils/content'
import Document from './src/Document'

export default {
  Document,
  siteRoot: process.env.DEPLOY_PRIME_URL,
  getSiteData: async () => {
    const portfolioLinks = await getPortfolioLinks()
    return {
      portfolioLinks,
    }
  },
  getRoutes: async () => {
    const about = await getContent('about')
    const posts = await getContent('blog')
    const quotes = await getContent('quotes')
    const testimonials = await getContent('testimonials')
    const portfolio = await getPortfolioContent()

    const categories = posts.reduce((memo, post) => {
      if (!memo.find(p => p.category === post.category)) {
        memo.push({ category: post.category, slug: post.categorySlug })
      }
      return memo
    }, [])
    const archives = posts.reduce((memo, post) => {
      const year = new Date(post.date).getFullYear()
      if (!memo.includes(year)) memo.push(year)
      return memo
    }, [])
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        localProps: {
          portfolio,
          quotes,
          testimonials,
        },
        getData: () => ({
          portfolio,
          quotes,
          testimonials,
        }),
        children: portfolio.map(detail => ({
          path: `services/${detail.slug}`,
          component: 'src/containers/Service',
          localProps: { detail },
          getData: () => ({
            detail,
          }),
        })),
      },
      {
        path: '/services',
        redirect: '/',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/about',
        component: 'src/containers/About',
        localProps: { about },
        getData: () => ({
          about,
        }),
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        localProps: { posts },
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          localProps: { posts, post },
          getData: () => ({
            posts,
            post,
          }),
        })),
      },
      {
        path: '/blog/category',
        component: 'src/containers/Blog',
        redirect: '/blog',
        localProps: { posts },
        getData: () => ({
          posts,
        }),
        children: categories.map(category => ({
          path: `/${category.slug}`,
          component: 'src/containers/Blog',
          localProps: { posts, category },
          getData: () => ({
            posts,
            category,
          }),
        })),
      },
      {
        path: '/blog/archive',
        component: 'src/containers/Blog',
        redirect: '/blog',
        localProps: { posts },
        getData: () => ({
          posts,
        }),
        children: archives.map(archive => ({
          path: `/${archive}`,
          component: 'src/containers/Blog',
          localProps: { posts, archive },
          getData: () => ({
            posts,
            archive,
          }),
        })),
      },
      {
        path: '404',
        component: 'src/containers/404',
      },
    ]
  },
  plugins: [
    'react-static-plugin-sass',
    'react-static-plugin-react-router'
  ]
}
