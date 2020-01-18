// @ts-check
const bili = require('bili')
const createBiliConfig = require('./create-bili-config')

/** @param {import('./../index').BuildVueLibRequest} request */
const buildVueLib = async request => {
  const config = createBiliConfig(request)
  const bundler = new bili.Bundler(config, {
    rootDir: request.rootDir,
    configFile: false
  })
  await bundler.run({
    write: true,
    concurrent: false,
    watch: false
  })
}

module.exports = buildVueLib
