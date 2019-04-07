import { getContent, getPortfolioContent, getPortfolioLinks } from './src/utils/content'
import Document from './src/Document'

export default {
  Document,
  siteRoot: process.env.SITE_ROOT,
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
        template: 'src/containers/Home',
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
          template: 'src/containers/Service',
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
        template: 'src/containers/Contact',
      },
      {
        path: '/about',
        template: 'src/containers/About',
        localProps: { about },
        getData: () => ({
          about,
        }),
      },
      {
        path: '/blog',
        template: 'src/containers/Blog',
        localProps: { posts },
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          template: 'src/containers/Post',
          localProps: { posts, post },
          getData: () => ({
            posts,
            post,
          }),
        })),
      },
      {
        path: '/blog/category',
        template: 'src/containers/Blog',
        redirect: '/blog',
        localProps: { posts },
        getData: () => ({
          posts,
        }),
        children: categories.map(category => ({
          path: `/${category.slug}`,
          template: 'src/containers/Blog',
          localProps: { posts, category },
          getData: () => ({
            posts,
            category,
          }),
        })),
      },
      {
        path: '/blog/archive',
        template: 'src/containers/Blog',
        redirect: '/blog',
        localProps: { posts },
        getData: () => ({
          posts,
        }),
        children: archives.map(archive => ({
          path: `/${archive}`,
          template: 'src/containers/Blog',
          localProps: { posts, archive },
          getData: () => ({
            posts,
            archive,
          }),
        })),
      },
      {
        path: '404',
        template: 'src/containers/404',
      },
    ]
  },
  plugins: [
    require.resolve('react-static-plugin-sass'),
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
}
