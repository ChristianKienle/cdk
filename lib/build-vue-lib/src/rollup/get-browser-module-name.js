// @ts-check

/**
 * @param {unknown} pkg
 * @return {string}
 */
const getBrowserModuleName = (pkg) => {
  if (pkg == null) {
    throw Error('build vue lib needs a package.json definition but got null')
  }
  if (typeof pkg !== 'object') {
    throw Error(
      `build vue lib needs a package.json definition but got something of type ${typeof pkg}.`
    )
  }
  // @ts-ignore
  const { cdk } = pkg
  if (cdk == null || typeof cdk !== 'object') {
    throw Error(`build vue lib needs a package.json that contains a cdk-object but got ${cdk}.`)
  }

  const { browserModuleName } = cdk
  if (browserModuleName == null || typeof browserModuleName !== 'string') {
    throw Error(
      `build vue lib needs a package.json that contains a cdk-object that has a valid browserModuleName but got ${browserModuleName}.`
    )
  }

  return browserModuleName
}

module.exports = getBrowserModuleName
