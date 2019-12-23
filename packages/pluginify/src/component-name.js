// @ts-check
/** @type {import('./types/options').GetComponentName} */
// By default we prefix all of our components with a 'C'. A prefix is not needed in 99% of all cases but there are some situations which require a prefix. One edge case is the 'Link' component. 'Link' is considered by some players in the Vue ecosystem to be an invalid component name. For example having the following component:
/*
<template>
  <CLink>hi</CLink>
</template>
*/
// Will make eslint complain ('The template root requires an element rather than texts' and 'Parsing error: x-invalid-end-tag'). Because of that we simply prefix all of our components with a 'C'.
export const defaultComponentName = context => `C${context.name}`
