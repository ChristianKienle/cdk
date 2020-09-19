// @ts-check
import Collection from './collection'

export default class Package {
  constructor(packageName) {
    this.packageName = packageName
  }

  importExample(exampleName) {
    return new Collection(this.packageName, []).importExample(exampleName)
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

  collection(name) {
    return new Collection(this.packageName, [name])
  }
}
