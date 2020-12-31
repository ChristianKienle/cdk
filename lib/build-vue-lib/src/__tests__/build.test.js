const fs = require('fs-extra')
const os = require('os')
const nanoid = require('nanoid').nanoid
const { join } = require('path')
// const createConfigs = require('../rollup/create-configs')
const build = require('..')
const execa = require('execa')

const writeEslintConfig = (dir) => {
  fs.writeFileSync(
    join(dir, '.eslintrc.js'),
    `module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2017,
      sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: [
      'standard',
      'plugin:vue/recommended',
    ],
    // required to lint *.vue files
    plugins: [
      'vue',
    ],
    env: {
      browser: true,
    },
    // add your custom rules here
    'rules': {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      // trailing comma
      'comma-dangle': ['error', 'always-multiline'],
    }
  }`
  )
}

describe('build', () => {
  test('simple lib', async () => {
    jest.setTimeout(/*60s*/ 60 * 1000)
    const dir = join(os.tmpdir(), nanoid())
    fs.ensureDirSync(dir)
    const pkgPath = join(dir, 'package.json')
    fs.writeJSONSync(pkgPath, {
      name: 'simplelib',
      license: 'MIT',
      main: 'dist/simple.umd.js',
      module: 'dist/simple.esm.js',
      unpkg: 'dist/simple.min.js',
      dependencies: {
        '@babel/preset-env': '^7.9.0',
        '@babel/core': '^7.9.0',
      },
      devDependencies: {
        'eslint-config-standard': '^16.0.2',
        'eslint-plugin-standard': '^5.0.0',
        'eslint-plugin-vue': '^7.4.0',
        eslint: '^7.16.0',
        '@babel/core': '^7.9.0',
        '@babel/preset-env': '^7.9.0',
        '@rollup/plugin-babel': '^5.2.2',
        '@rollup/plugin-commonjs': '^11.0.2',
        '@rollup/plugin-eslint': '^8.0.1',
        '@rollup/plugin-node-resolve': '^7.1.1',
        '@rollup/plugin-replace': '^2.3.1',
        autoprefixer: '^9.7.5',
        'babel-eslint': '^10.1.0',
        'clean-css': '^4.1.8',
        'cross-env': '^7.0.2',
        'eslint-config-standard': '^16.0.2',
        'eslint-plugin-html': '^6.1.1',
        'eslint-plugin-import': '^2.22.1',
        'eslint-plugin-node': '^11.1.0',
        'eslint-plugin-promise': '^4.2.1',
        'eslint-plugin-standard': '^5.0.0',
        'eslint-plugin-vue': '^7.4.0',
        'fs-extra': '^9.0.0',
        rollup: '^2.2.0',
        'rollup-plugin-css-only': '^2.0.0',
        'rollup-plugin-css-porter': '^1.0.2',
        'rollup-plugin-terser': '^5.3.0',
        'rollup-plugin-vue': '^5.1.6',
        vue: '^2.6.11',
        'vue-template-compiler': '^2.6.11',
      },
    })
    const srcPath = join(dir, 'src')
    fs.ensureDirSync(srcPath)
    const indexContents = `export default () => console.log('hihi')
`
    const indexPath = join(srcPath, 'index.js')
    fs.writeFileSync(indexPath, indexContents, { encoding: 'utf-8' })
    const babelConfigPath = join(dir, 'babel.config.js')
    const babelConfig = `module.exports = {
      presets: [[require('@babel/preset-env'), { modules: false }]],
    }`
    fs.writeFileSync(babelConfigPath, babelConfig, { encoding: 'utf-8' })
    writeEslintConfig(dir)
    process.chdir(dir)
    await execa('/usr/local/opt/node@14/bin/npm', ['install'], { cwd: dir })
    await build({ rootDir: dir })
    // eslint-disable-next-line no-console
    console.log(dir)
    expect(true).toBeTruthy()
  })
  test('vue lib', async () => {
    jest.setTimeout(/*60s*/ 60 * 1000)
    const dir = join(os.tmpdir(), nanoid())
    fs.ensureDirSync(dir)
    const pkgPath = join(dir, 'package.json')
    writeEslintConfig(dir)

    fs.writeJSONSync(pkgPath, {
      name: 'vuelib',
      license: 'MIT',
      main: 'dist/vuelib.umd.js',
      module: 'dist/vuelib.esm.js',
      unpkg: 'dist/vuelib.min.js',
      peerDependencies: {
        vue: '^2.6.0',
      },
      browserslist: ['> 1%', 'last 2 versions', 'not ie <= 8'],
      dependencies: {
        '@babel/preset-env': '^7.9.0',
        '@babel/core': '^7.9.0',
        '@babel/preset-env': '^7.9.0',
      },
      devDependencies: {
        'eslint-config-standard': '^16.0.2',
        'eslint-plugin-standard': '^5.0.0',
        'eslint-plugin-vue': '^7.4.0',
        eslint: '^7.16.0',
        '@babel/core': '^7.9.0',
        '@babel/preset-env': '^7.9.0',
        '@rollup/plugin-babel': '^5.2.2',
        '@rollup/plugin-commonjs': '^11.0.2',
        '@rollup/plugin-eslint': '^8.0.1',
        '@rollup/plugin-node-resolve': '^7.1.1',
        '@rollup/plugin-replace': '^2.3.1',
        autoprefixer: '^9.7.5',
        'babel-eslint': '^10.1.0',
        'clean-css': '^4.1.8',
        'cross-env': '^7.0.2',
        'eslint-config-standard': '^16.0.2',
        'eslint-plugin-html': '^6.1.1',
        'eslint-plugin-import': '^2.22.1',
        'eslint-plugin-node': '^11.1.0',
        'eslint-plugin-promise': '^4.2.1',
        'eslint-plugin-standard': '^5.0.0',
        'eslint-plugin-vue': '^7.4.0',
        'fs-extra': '^9.0.0',
        rollup: '^2.2.0',
        'rollup-plugin-css-only': '^2.0.0',
        'rollup-plugin-css-porter': '^1.0.2',
        'rollup-plugin-terser': '^5.3.0',
        'rollup-plugin-vue': '^5.1.6',
        vue: '^2.6.11',
        'vue-template-compiler': '^2.6.11',
      },
    })
    const srcPath = join(dir, 'src')
    fs.ensureDirSync(srcPath)
    const buttonContents = `
<template>
  <button>before slot <slot /> after slot</button>
</template>

<script>
export default {
  name: 'MyButton',
}
</script>
`
    const buttonPath = join(srcPath, 'button.vue')
    fs.writeFileSync(buttonPath, buttonContents, { encoding: 'utf-8' })

    const indexContents = `
import Button from './button.vue'

export function install (vue) {
  vue.component('MyButton', Button)
}
`
    const indexPath = join(srcPath, 'index.js')
    fs.writeFileSync(indexPath, indexContents, { encoding: 'utf-8' })

    const babelConfigPath = join(dir, 'babel.config.js')
    const babelConfig = `module.exports = {
      presets: [[require('@babel/preset-env'), { modules: false }]],
    }`
    fs.writeFileSync(babelConfigPath, babelConfig, { encoding: 'utf-8' })

    process.chdir(dir)
    await execa('/usr/local/opt/node@14/bin/npm', ['install'], { cwd: dir })
    await build({ rootDir: dir })
    // eslint-disable-next-line no-console
    console.log(dir)
    expect(true).toBeTruthy()
  })
})
