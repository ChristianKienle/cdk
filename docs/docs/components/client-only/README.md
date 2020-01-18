# Client Only

The `@vue-cdk/client-only`-package contains a single component: `ClientOnly`. This component can be used to wrap non SSR friendly components.

::: tip API
The *Client-Only*-component has a dedicated [API documentation](./../../api/client-only).
:::

## History & Credits

`@vue-cdk/client-only` is a friendly fork of [egoist/vue-client-only](https://github.com/egoist/vue-client-only). The component was only slightly changed. However, a lot of tests and documentation was added to make it easier to consume. Those additions will be contributed back to the original authors. The original license of [egoist/vue-client-only](https://github.com/egoist/vue-client-only) can be found within the source of `@vue-cdk/client-only`.


## Installation
``` sh
$ npm install @vue-cdk/client-only --save
```

## Usage
After installing `@vue-cdk/client-only` you have to import the module and pass it over to `Vue.use(…)`. This will make the *client-only*-component globally available as `CClientOnly`.

``` js
import Vue from 'vue'
import ClientOnly from '@vue-cdk/client-only'

Vue.use(ClientOnly)
```

If you prefer locally registered components then please refer to the example below which is not using the `@vue-cdk/client-only`-plugin.

## Examples

<Demo for="client-only/default" />
