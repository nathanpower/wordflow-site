import ExtractTextPlugin from 'extract-text-webpack-plugin'
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
        component: 'src/containers/Home',
        getData: () => ({
          portfolio,
          quotes,
          testimonials,
        }),
        children: portfolio.map(detail => ({
          path: `services/${detail.slug}`,
          component: 'src/containers/Service',
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
        getData: () => ({
          about,
        }),
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
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
        getData: () => ({
          posts,
        }),
        children: categories.map(category => ({
          path: `/${category.slug}`,
          component: 'src/containers/Blog',
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
        getData: () => ({
          posts,
        }),
        children: archives.map(archive => ({
          path: `/${archive}`,
          component: 'src/containers/Blog',
          getData: () => ({
            posts,
            archive,
          }),
        })),
      },
      {
        is404: true,
        redirect: '/',
      },
    ]
  },
  webpack: (config, { stage, defaultLoaders }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
