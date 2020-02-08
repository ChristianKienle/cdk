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
}

// Type that represents the 'raw' options we support
export type Options = Partial<_Options>
