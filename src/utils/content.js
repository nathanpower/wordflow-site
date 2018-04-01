const Fs = require('fs')
const Path = require('path')
const { promisify } = require('util')

const Glob = require('fast-glob')
const FrontMatter = require('yaml-front-matter')
const StartCase = require('lodash.startcase')
const Flatten = require('lodash.flatten')
const Marked = require('marked')
const Slugify = require('slugify')

const readFileAsync = promisify(Fs.readFile)

const getPortfolioPaths = () => Glob(['./content/portfolio/*'], { onlyFiles: false, onlyDirectories: true })

const readFiles = async paths => Promise.all(paths.map(path => readFileAsync(path)))

const parseFiles = async files => Promise.all(files.map(file => FrontMatter.loadFront(file)))

export const getContent = async folder => {
  const paths = await Glob([`./content/${folder}/*.md`])
  const files = await readFiles(paths)
  const parsed = await parseFiles(files)
  const converted = parsed.map(entry => Object.assign({}, entry, { html: Marked(entry.__content) }))
  converted.forEach(entry => {
    if (folder === 'blog') {
      delete entry.__content // let's not keep the blog markdown in memory
      entry.slug = Slugify(entry.title, { lower: true })
      entry.categorySlug = Slugify(entry.category, { lower: true })
      const dateArgs = entry.date.split('-').map((num, idx) => idx === 1 ? parseInt(num) - 1 : parseInt(num))
      entry.date = new Date(...dateArgs).valueOf()
    }

    const paragraphs = entry.html.match(/<p>(.*?)<\/p>/g)
    const optimalParagraph = paragraphs.find(paragraph => paragraph.length > 300) || paragraphs[0]
    entry.summary = `<p>${
      optimalParagraph.replace(/<\/?p>/g, '').substring(0, 300)
    } <span class="summary-ellipsis">[...]</span></p>`
  })

  if (folder === 'blog') {
    return converted.sort((a, b) => a.date < b.date ? 1 : -1)
  }

  return converted.sort((a, b) => a.order > b.order ? 1 : -1)
}


export const getOverviews = async () => {
  const paths = await getPortfolioPaths()

  const overViewPromises = paths.map(path => Glob([`${path}/overview*.md`]))

  const overviewPaths = await Promise.all(overViewPromises)

  const overviewFilePromises = overviewPaths.map(paths => readFiles(paths))
  const overviewFiles = await Promise.all(overviewFilePromises)

  const overviewPromises = await Promise.all(overviewFiles.map(files => parseFiles(files)))

  const overviews = Flatten(await Promise.all(overviewPromises))

  return overviews.map((overview, i) => Object.assign(overview, {
    slug: Path.basename(paths[i]),
    html: Marked(overview.__content),
    category: StartCase(Path.basename(paths[i])),
    path: paths[i]
  })).sort((a, b) => a.order > b.order ? 1 : -1)
}

export const getPortfolioLinks = async () => {
  const overviews = await getOverviews()
  return overviews.map(o => ({ title: o.title, slug: o.slug })).sort((a, b) => a.order > b.order)
}

export const getPortfolioContent = async () => {
  const overviews = await getOverviews()

  const entryPromises = overviews.map(({ path }) => Glob([`${path}/entries/*.md`]))
  const contentPaths = await Promise.all(entryPromises)
  const contentFilePromises = contentPaths.map(paths => readFiles(paths))
  const contentFiles = await Promise.all(contentFilePromises)
  const contentPromises = await Promise.all(contentFiles.map(files => parseFiles(files)))
  const content = await Promise.all(contentPromises)

  return overviews.reduce((memo, { category }, index) => {
    memo.push(Object.assign({
      category,
      entries: content[index].sort((a, b) => a.order > b.order ? 1 : -1),
    }, overviews[index]))
    return memo
  }, [])
}
