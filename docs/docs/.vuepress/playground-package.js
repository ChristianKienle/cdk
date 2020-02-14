module.exports = {
  "name": "vue-cdk-example",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "vue": "^2.6.11",
    "vue-router": "^3.1.5",
    "@vue-cdk/link": "^0.9.0",
    "@vue-cdk/client-only": "^0.9.0",
    "@vue-cdk/infinite-scroll": "^0.9.0",
    "@vue-cdk/interaction-outside": "^0.9.0",
    "@vue-cdk/link": "^0.9.0",
    "@vue-cdk/list": "^0.9.0",
    "@vue-cdk/match-media": "^0.9.0",
    "@vue-cdk/modal": "^0.9.0",
    "@vue-cdk/popover": "^0.9.0",
    "@vue-cdk/focus-trap": "^0.9.0",
    "@vue-cdk/portal": "^0.9.0",
    "@vue-cdk/scroll-container": "^0.9.0",
    "@vue-cdk/tooltip": "^0.9.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.6.0",
    "@vue/cli-plugin-eslint": "^3.6.0",
    "@vue/cli-service": "^3.6.0",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.8.0",
    "eslint-plugin-vue": "^5.0.0",
    "vue-template-compiler": "^2.6.11"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": ["plugin:vue/essential", "eslint:recommended"],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
