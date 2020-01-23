// @ts-check
const pagesContext = require.context('./../../../packages/', true, /\.page.vue$/)
const Path = require('path')

// A single page key looks like this:
// ./modal/__tests__/pages/modal-default.page.vue
const pageKeys = pagesContext.keys()

/** @param {string} key */
const importPageModule = key => pagesContext(key)

/** @param {string} key */
const pageNameFromKey = key => {
  // As stated above, a page key looks like this:
  // ./components/modal/__tests__/pages/default.page.vue
  // We clean it up a bit:
  // - find the first path component after '__tests__': this will be the base name
  // - find the actual page name (remove extension)
  // Thus the name for the above key would be:
  // modal/default
  const keyComponents = key.split(Path.sep)
  const testsIndex = keyComponents.indexOf('__tests__')
  // <= 0 because 0 is not valid: we expect __tests__ to have a parent
  if (testsIndex <= 0) {
    throw Error(`Found test page ${key} in a directory that is not inside a __tests__ dir`)
  }
  const baseName = keyComponents[testsIndex - 2]
  const [filenameWithExtension] = keyComponents.reverse()
  const name = filenameWithExtension.replace(/\.page.vue$/, '')
  return `${baseName}/${name}`
}

/** @param {string} key */
const importPage = key => {
  const pageModule = importPageModule(key)
  const {
    // actual component that renders the page. This is the default export of the SFC.
    default: component,
    route = {}
  } = pageModule
  const name = pageNameFromKey(key)
  return {
    name,
    component,
    route
  }
}

export { importPageModule, pageKeys, importPage, pageNameFromKey }
