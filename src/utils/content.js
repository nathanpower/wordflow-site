const Fs = require('fs')
const Path = require('path')
const { promisify } = require('util')

const Glob = require('fast-glob')
const FrontMatter = require('yaml-front-matter')
const StartCase = require('lodash.startcase')
const Flatten = require('lodash.flatten')

const readFileAsync = promisify(Fs.readFile)

const getPortfolioPaths = () => Glob(['./content/portfolio/*'], { onlyFiles: false, onlyDirectories: true })

const readFiles = async paths => Promise.all(paths.map(path => readFileAsync(path)))

const parseFiles = async files => Promise.all(files.map(file => FrontMatter.loadFront(file)))

export const getBlogContent = async () => {
  const paths = await Glob(['./content/blog/*.md'])
  const files = await readFiles(paths)
  const parsed = await parseFiles(files)
  return parsed
}

export const getPortfolioContent = async () => {
  const paths = await getPortfolioPaths()
  const categories = paths.map(path => StartCase(Path.basename(path)))

  const entryPromises = paths.map(path => Glob([`${path}entries/*.md`]))
  const overViewPromises = paths.map(path => Glob([`${path}overview*.md`]))

  const contentPaths = await Promise.all(entryPromises)
  const overviewPaths = await Promise.all(overViewPromises)

  const contentFilePromises = contentPaths.map(paths => readFiles(paths))
  const contentFiles = await Promise.all(contentFilePromises)

  const contentPromises = await Promise.all(contentFiles.map(files => parseFiles(files)))

  const content = await Promise.all(contentPromises)

  const overviewFilePromises = overviewPaths.map(paths => readFiles(paths))
  const overviewFiles = await Promise.all(overviewFilePromises)

  const overviewPromises = await Promise.all(overviewFiles.map(files => parseFiles(files)))

  const overviews = Flatten(await Promise.all(overviewPromises))

  return categories.reduce((memo, category, index) => {
    memo.push(Object.assign({
      category,
      slug: Path.basename(paths[index]),
      entries: content[index],
    }, overviews[index]))
    return memo
  }, []).sort((a, b) => a.order > b.order)
}
