// @ts-check
import Collection from './collection'

export default class Package {
  constructor(packageName) {
    this.packageName = packageName
  }

  importExample(exampleName) {
    return new Collection(this.packageName, []).importExample(exampleName)
  }

  collection(name) {
    return new Collection(this.packageName, [name])
  }
}
