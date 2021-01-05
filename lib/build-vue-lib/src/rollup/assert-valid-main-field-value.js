// @ts-check
const path = require('path')

// This function validate the value of a main field.
// A main field value comes from a package.json files property
// typically from properties like
// - 'module'
// - 'jsnext'
// - 'main'
// - 'browser'
// Up until now the value sometimes began with dist/* and sometimes with src/*.
// Going forward this project will be using rollup and transpile everything.
// Thus, src/* should no longer be used. If it is used it may override files.
// This function throws in case the main field value is invalid or would cause code
// to be ovewritten.
const assertValidMainFieldValue = (mainFieldValue) => {
  if (mainFieldValue == null) {
    throw Error(`null is not a valid main field value`)
  }
  const [firstDir] = mainFieldValue.split(path.posix.sep)
  if (firstDir === 'src') {
    throw Error(`${mainFieldValue} is not a valid main field value`)
  }
  return true
}

module.exports = assertValidMainFieldValue
