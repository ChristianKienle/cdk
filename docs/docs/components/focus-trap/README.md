# Focus Trap
The focus trap package makes it easy to trap the focus within a component/element. `@vue-cdk/focus-trap` is a wrapper around the [focus-trap package from @davidtheclark](https://github.com/davidtheclark/focus-trap). The main motivation of this wrapper was to make it more convenient for Vue developers.

**Table of Contents**

[[toc]]

## Overview
The main objective of `@vue-cdk/focus-trap` is to make focus trapping more convenient. In order to serve different needs `@vue-cdk/focus-trap` comes with both, high– and low–level ways to accomplish focus trapping.

- **High Level Focus Trap Component:** `@vue-cdk/focus-trap` contains a component called `CFocusTrap`. You can use this component to trap the focus within a wrapped container element or component.
- **Low Level Utility Function:** `@vue-cdk/focus-trap` also exports a function that allows you to create traps manually.

## Installation

``` sh
$ npm install @vue-cdk/focus-trap --save
```

## Usage

### Using the Plugin
After installing `@vue-cdk/focus-trap` you may simply use the Vue plugin:

```js
import Vue from 'vue'
import FocusTrap from '@vue-cdk/focus-trap'
Vue.use(FocusTrap /*, optional options */)
```

The plugin globally registers a component that can be used to create focus traps. This component is called `CFocusTrap`. Please refer to the examples below to see how it is used.

### Importing the Low–Level Utilities

```js
import { createFocusTrap } from '@vue-cdk/focus-trap'
// `vm` is an instance of a Vue component
const trap = createFocusTrap(vm)
trap.activate()
// later… trap.deactivate()
```

If you want to know how the low–level utilities should be used in more detail, please refer to the examples below.

## Examples

### Using `CFocusTrap`
<Demo for="focus-trap/component" />

### Hello World
<Demo for="focus-trap/default" />

### Nested Focus Trapping
<Demo for="focus-trap/nested" />

## API
- [Focus Trap](./../../api/focus-trap)
