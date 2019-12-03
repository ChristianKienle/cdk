// @ts-check
const { resolve } = require('path');

module.exports = [{
  name: '@storybook/addon-storysource/preset',
  options: {
    rule: {
      test: [/\.stories\.jsx?$/],
      include: [resolve(__dirname, '../src')],
    },
    loaderOptions: {
      prettierConfig: { printWidth: 80, singleQuote: false },
    }
  }
}]
