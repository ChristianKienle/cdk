const fs = require('fs')
const { join } = require('path')

const ThemeOptions = {
  navbar: {
    items: [
      { text: 'Home', link: '/' },
      { text: 'Foundation', link: '/foundation/' },
      { text: 'Components', link: '/components/' },
      { text: 'About', link: '/about/' },
    ]
  }
}

module.exports = {
  async apply(minipress) {
    const code = fs.readFileSync(join(__dirname, 'minipress.enhance.js'), 'utf-8')
    minipress.addAppEnhancer(code)
  },
  plugins: [
    ['@minipress/theme-docs', ThemeOptions],
    '@minipress/plugin-clean-urls',
    '@minipress/plugin-component-documentation',
    '@minipress/plugin-component-demo'
  ]
}