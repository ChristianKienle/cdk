// @ts-check
import Collection from './collection'

/** @param {string} collectionName */
export default collectionName => {
  const context = require.context('./', true, /.vue$/, 'lazy')
  return new Collection(collectionName, context)
}
