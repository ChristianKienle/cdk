# VuePress Plugins

## API Documentation Plugin
`@vue-cdk/vuepress-plugin-api` is a [VuePress](https://v1.vuepress.vuejs.org/guide/) plugin that generates API documentation for your single file components.

### Installation
```sh
$ npm install @vue-cdk/vuepress-plugin-api --save-dev
```

### Usage

In your `.vuepress/config.js`–file:

```js
module.exports = {
  plugins: [
    [
      '@vue-cdk/vuepress-plugin-api', {
        items: [
          {
            localPath: '/path/to/a/component/button.vue',
            path: 'api/button'
          }
        ]
      }
    ]
  ]
}
```

#### `items`-Option
`items` must be an array of objects. Each item must have the following shape:

- `localPath`: Absolute path to a single file component
- `path`: Relative path for the API documentation for the correspoding component.

## Component Demo Plugin

### Installation
```sh
$ npm install @vue-cdk/vuepress-plugin-demo --save-dev
```

### Usage

In your `.vuepress/config.js`–file:

```js
module.exports = {
  plugins: [
    [
      '@vue-cdk/vuepress-plugin-demo', {
        dir: 'path/to/your/examples' // should contain *.vue-files
      }
    ]
  ]
}
```

### Displaying a Demo

You can display a demo for your any of your examples by using the `Demo`–component:

```md
## Normal Button Demo

<Demo for="buttons/normal.vue" />
```

This will display a demo for an example located in `$dir/buttons/normal.vue`.

A demo looks like this:

<Demo for="popover-theme/clean" />
