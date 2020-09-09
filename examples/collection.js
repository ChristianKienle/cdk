// @ts-check
export default class Collection {
  /**
   * @param {string} packageName
   * @param {string[]} collection
   */
  constructor(packageName, collection = []) {
    this._packageName = packageName
    this._collection = collection
  }

  /** @param {string} name */
  importExample(name) {
    const { _packageName, _collection } = this
    let exampleModule
    if (_collection.length === 0) {
      exampleModule = require(`./../packages/${_packageName}/__examples__/${name}.vue`)
    } else {
      exampleModule = require(`./../packages/${_packageName}/__examples__/${_collection.join(
        '/'
      )}/${name}.vue`)
    }
    return exampleModule.default
  }

  // The way stories are written changes with Storybook 6.
  // This method is new and supposed to be used with Storyboard 6+.
  // It returns a story, that renders the example named `exampleName`.
  storyFor(exampleName) {
    return () => ({
      components: { Example: this.importExample(exampleName) },
      template: '<Example />',
    })
  }

  /** @param {string} name */
  collection(name) {
    const { _collection } = this
    return new Collection(this._packageName, [..._collection, name])
  }
}
