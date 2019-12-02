import ClientOnly from './client-only'

export const install = vue => {
  vue.component('CClientOnly', ClientOnly)
}

export { default as ClientOnly } from './client-only'

