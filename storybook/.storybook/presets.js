const path = require('path');
const globby = require('globby');

const stories = globby.sync('**/*.stories.js', { absolute: true, cwd: path.resolve(__dirname, '..', '..', 'packages')})
console.log(stories)

module.exports = [
  {
    name: '@storybook/addon-storysource/preset',
    options: {
      rule: {
        // test: [/\.stories\.jsx?$/], This is default
        include: stories, //[path.resolve(__dirname, '../src')], // You can specify directories
      },
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      },
    },
  },
];