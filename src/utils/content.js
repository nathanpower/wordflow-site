const Fs = require('fs')
const Glob = require('fast-glob')
const FrontMatter = require('yaml-front-matter')

const getPortfolioPaths = () => Glob(['./content/portfolio/*'], { onlyFiles: false, onlyDirectories: true })
const parsePaths = paths => paths.map(path => FrontMatter.loadFront(Fs.readFileSync(path)))

export const getBlogContent = async () => {
  const paths = await Glob(['./content/blog/*.md'])
  return parsePaths(paths)
}

export const getPortfolioContent = async () => {
  const paths = await getPortfolioPaths()
  return paths
}
