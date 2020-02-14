// Normalized options type
export interface _Options {
  // A globby-pattern used to determine which examples should be 'demoable'
  examplesPattern: string
  // The directory used as a starting point for the search for examples
  cwd: string
  // Returns the package name of an example
  packageNameFromPath(path: string): string
  collectionPathComponentsFromPath(path: string): string[]
  exampleNameFromPath(path: string): string
  // Options for the Playground Button Integration
  // This defaults to `false` – which means that no playground button is displayed.
  playground: false | _PlaygroundOptions
}

export interface _PlaygroundOptions {
  // The package.json as a JS-object of the project that will be generated on the fly.
  package: { [key: string]: any },
  setupModule: {
    // The code of the setup module. The code must export a function by default. This
    // function will be called with the Vue-constructor.
    // ```js
    // export default ({ Vue }) => {
    //    // configure Vue to fit your needs
    // }
    // ```
    code: string
  }
}

// Type that represents the 'raw' options we support
export type Options = Partial<_Options>
