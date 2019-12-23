# Vue Component Development Kit
Inspired by [Angular CDK](https://material.angular.io/cdk) – yeah: Not everything Angular does is bad.

Everything in VCDK should be in it's own package and consumable as such.

## Using this Repository
This repository is using [Lerna](https://lerna.js.org/). The current lerna configuration is not yet completly done – there are certain things (not all related to Lerna) that I would like to see improved. More about those known issues later. First things first:

After cloning this repository you should run:

```sh
$ yarn install
```

This will install all dependencies and automatically execute `lerna bootstrap` afterwards. `lerna bootstrap` will in turn initialize Lerna and all sub-projects.

### Documentation
The documentation is not a single thing. It consists of several things in order to accomodate the need of each use-case and target audience.

#### The *user-facing* documentation
The user-facing documentation is a standard [VuePress](https://v1.vuepress.vuejs.org/) installation. You run it by executing:

```sh
$ yarn docs
```

Everything that goes into *Vue Component Development Kit* should be relfected somewhere in the user-facing documentation. The user-facing documentation is what developers will first go to in case of questions/need for information. Because of that it should contain everything in a single place:

- Installation instructions
- A Guide which explains concepts and background information
- Live examples
- Copy and pasteable code snippets
- **API reference**

The API reference is realized by a custom VuePress plugin which is using [vuese](https://github.com/vuese) under the hood. It works like this:

- You document your component by using comments. Refer to already existing components to get an idea how the components should look like.
- You have to tell the API plugin where to find your documented component. To do this add an entry to `docs/docs/.vuepress/config.js` (to the `APIPlugin`-options-object). For each and every file the plugin will create a new page at `/api/$component-name/index.html` that contains the rendered API documentation. You can then link to that site from within your guide/main component documentation.

#### Running the Storybook
The storybook is mainly used during the development of *Vue Component Development Kit*. You can run it by executing:

```sh
$ yarn storybook
```

The storybook is not the main documentation. It is intended to be used by people who are contributing to *Vue Component Development Kit*.

## Making a Release
```sh
$ ./node_modules/.bin/lerna publish patch
```

## Known Issues
There are a lot of known issues:

- The documentation will throw errors from time to time (in dev-mode). This seems to be a VuePress-problem we can't do anything about. I am thinking about moving away from VuePress since it is really annoying.
- The unit test-setup is not finished yet. I have executed tests already but there is no uniform way to write/execute tests.
- The end-to-end-test-setup is also not finished yet. Again: I have executed end-to-end-tests but there is no uniform/consistent way of executing end-to-end-tests.
- No consistent linter setup
- Dependencies are a mess: When is something only a peerDependency and when is something a real dependency?
- `base` is hardcoded.
- No CI setup
- No automated release
- Currently Lerna would simply publish the source code of every package without building it first. This will work for every consumer that is using Webpack but thats about it.

