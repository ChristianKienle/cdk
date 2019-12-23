// @ts-check
export default class Collection {
  /**
   * @param {string} collectionName
   * @param {any} examplesContext
   */
  constructor(collectionName, examplesContext) {
    this.collectionName = collectionName
    this.examplesContext = examplesContext
  }

  /** @param {string} exampleName */
  importExample(exampleName) {
    return () => {
      const { collectionName, examplesContext } = this
      const exampleModule = require(`./${collectionName}/${exampleName}.vue`)
      const example = exampleModule.default
      return example
    }
  }
}
