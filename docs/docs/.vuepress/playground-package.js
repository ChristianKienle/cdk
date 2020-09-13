// @ts-check
const Path = require('path')
const globby = require('globby')
const packagesRoot = Path.join(__dirname, '..', '..', '..', 'packages')
const fs = require('fs')

const packages = globby.sync(['**/package.json', '!**/node_modules'], {
  cwd: packagesRoot,
  gitignore: true,
  absolute: true,
})

console.log(packages)

const packageInfoFromPackageAtPath = (path) => {
  const { version, name } = JSON.parse(fs.readFileSync(path, 'utf-8'))
  return { version, name }
}

const dependencies = {
  vue: '^2.6.11',
  'vue-router': '^3.1.5',
};

const vueCdkPackageInfos = (() => {
  return packages.map(packageInfoFromPackageAtPath)
})()

vueCdkPackageInfos.forEach(info => {
  dependencies[info.name] = info.version
})

module.exports = {
  name: 'vue-cdk-example',
  version: '0.1.0',
  private: true,
  scripts: {
    serve: 'vue-cli-service serve',
    build: 'vue-cli-service build',
    lint: 'vue-cli-service lint',
  },
  dependencies: {
    vue: '^2.6.11',
    'vue-router': '^3.1.5',
    ...dependencies,
  },
  devDependencies: {
    '@vue/cli-plugin-babel': '^3.6.0',
    '@vue/cli-plugin-eslint': '^3.6.0',
    '@vue/cli-service': '^3.6.0',
    'babel-eslint': '^10.0.1',
    eslint: '^5.8.0',
    'eslint-plugin-vue': '^5.0.0',
    'vue-template-compiler': '^2.6.11',
  },
  eslintConfig: {
    root: true,
    env: {
      node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {},
    parserOptions: {
      parser: 'babel-eslint',
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  browserslist: ['> 1%', 'last 2 versions', 'not ie <= 8'],
}
