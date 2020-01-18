// @ts-check
const presets = [
  [
    '@vue/app',
    {
      useBuiltIns: false,
      polyfills: false,
      corejs: undefined
    }
  ]
]

/** @type {import('bili/types/types').BabelPresetOptions} */
module.exports = {
  presets,
  plugins: ['@babel/plugin-syntax-dynamic-import']
}
