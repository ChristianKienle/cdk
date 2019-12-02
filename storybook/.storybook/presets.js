const path = require('path');

module.exports = [
  {
    name: '@storybook/addon-storysource/preset',
    options: {
      rule: {
        test: [/\.stories\.jsx?$/],
        include: [path.resolve(__dirname, '../src')],
      },
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      },
    },
  },
];