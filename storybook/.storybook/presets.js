const path = require('path');
module.exports = [
  {
    name: '@storybook/addon-storysource/preset',
    options: {
      rule: {
        // test: [/\.stories\.jsx?$/], This is default
        include: [path.resolve(__dirname, '../src')], // You can specify directories
      },
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      },
    },
  },
];