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

export const getContent = async folder => {
  const paths = await Glob([`./content/${folder}/*.md`])
  const files = await readFiles(paths)
  const parsed = await parseFiles(files)
  return parsed.sort((a, b) => a.order > b.order)
}


export const getOverviews = async () => {
  const paths = await getPortfolioPaths()

  const overViewPromises = paths.map(path => Glob([`${path}/overview*.md`]))

  const overviewPaths = await Promise.all(overViewPromises)

  const overviewFilePromises = overviewPaths.map(paths => readFiles(paths))
  const overviewFiles = await Promise.all(overviewFilePromises)

  const overviewPromises = await Promise.all(overviewFiles.map(files => parseFiles(files)))

  const overviews = Flatten(await Promise.all(overviewPromises))

  return overviews.map((overview, i) => Object.assign(overview, { slug: Path.basename(paths[i]) }))
}

export const getPortfolioLinks = async () => {
  const overviews = await getOverviews()
  return overviews.map(o => ({ title: o.title, slug: o.slug }))
}

export const getPortfolioContent = async () => {
  const paths = await getPortfolioPaths()
  const overviews = await getOverviews()
  const categories = paths.map(path => StartCase(Path.basename(path)))

  const entryPromises = paths.map(path => Glob([`${path}/entries/*.md`]))
  const contentPaths = await Promise.all(entryPromises)
  const contentFilePromises = contentPaths.map(paths => readFiles(paths))
  const contentFiles = await Promise.all(contentFilePromises)
  const contentPromises = await Promise.all(contentFiles.map(files => parseFiles(files)))
  const content = await Promise.all(contentPromises)

  return categories.reduce((memo, category, index) => {
    memo.push(Object.assign({
      category,
      slug: Path.basename(paths[index]),
      entries: content[index].sort((a, b) => a.order > b.order),
    }, overviews[index]))
    return memo
  }, []).sort((a, b) => a.order > b.order)
}
