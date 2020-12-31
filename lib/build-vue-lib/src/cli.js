// @ts-check

const chalk = require('chalk')
const { basename } = require('path')
const { log } = console

const run = async () => {
  const buildVueLib = require('./index')
  const rootDir = process.cwd()
  log(chalk.black.bold.bgYellowBright(' ● ') + ` Building package ${basename(rootDir)}…`)
  await buildVueLib({
    rootDir
  })
  log(chalk.black.bold.bgYellowBright(' ● ') + ` Done!`)
}

module.exports = {
  run
}
