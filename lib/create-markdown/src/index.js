// @ts-check
const CreateMarkdown = require('./create-markdown')
/** @param {(() => string)[]=} tokens */
const createMarkdown = tokens => new CreateMarkdown(tokens)
module.exports = {
  CreateMarkdown,
  createMarkdown
}
