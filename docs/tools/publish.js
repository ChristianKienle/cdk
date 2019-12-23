var ghpages = require('gh-pages')
const path = require('path')
ghpages.publish(path.resolve(__dirname, '..', 'dist'), function(err) {
  // eslint-disable-next-line no-console
  console.log(err)
})
