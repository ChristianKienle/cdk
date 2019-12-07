module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  rules: {
    "max-len": "off",
    "no-console": "error",
    "no-debugger": "error",
    "getter-return": ["error", { allowImplicit: true }],
    "sort-imports": ["error", { ignoreDeclarationSort: true }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: ["**/__tests__/*.test.js"],
      env: {
        jest: true
      }
    }

  ],
  extends: ["plugin:vue/essential", "@vue/prettier"]

  // root: true,
  // env: {
  //   node: true
  // },
  // 'extends': [
  //   'plugin:vue/essential',
  //   'eslint:recommended'
  // ],
  // ignorePatterns: ['node_modules'],
  // rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  // },
  // parserOptions: {
  //   parser: 'babel-eslint'
  // },
  // overrides: [
  //   {
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //       '**/tests/unit/**/*.spec.{j,t}s?(x)'
  //     ],
  //     env: {
  //       jest: true
  //     }
  //   }
  // ]
}
