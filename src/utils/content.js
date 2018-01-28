const Fs = require('fs')
const Glob = require('fast-glob')
const FrontMatter = require('yaml-front-matter')

const getPaths = type => Glob([`./content/${type}/*.md`])
const parsePaths = paths => paths.map(path => FrontMatter.loadFront(Fs.readFileSync(path)))

export const getContent = async type => {
  const paths = await getPaths(type)
  return parsePaths(paths)
}
