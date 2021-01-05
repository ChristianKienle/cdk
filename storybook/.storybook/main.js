const path = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.resolve.alias['vue$'] = path.join(
      __dirname,
      '..',
      '..',
      'node_modules',
      'vue/dist/vue.esm.js'
    )
    return config
  },
}