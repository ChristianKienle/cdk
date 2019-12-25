module.exports = options => {
  if (options == null) {
    return {
      dir: process.cwd()
    }
  }
  return {
    dir: process.cwd(),
    ...options
  }
}
