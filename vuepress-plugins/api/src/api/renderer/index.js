// @ts-check
/* eslint-env node */

const Vuedocs = require('./vuedocs-renderer')
const Vuese = require('./vuese-renderer')
const Markdown = require('./markdown-renderer')

module.exports = { Default: Markdown, Vuedocs, Vuese, Markdown }
