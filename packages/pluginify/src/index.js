// @ts-check
import normalizedPluginOptions from './normalize-options'

const getComponentName = component => {
  if (typeof component === 'function') {
    const { prototype } = component
    return prototype.constructor.extendOptions.name
  }
  return component.name
}

// This function turns any constructor into a Vue plugin.
// If you have a components that depends on other components to be globally
// installed pass them as the seoncond parameter.
/** @param {Array<import('vue').Component>} dependencies */
export default (...dependencies) => {
  const install = (vue, options) => {
    const _options = normalizedPluginOptions(options)
    const { onDidRegisterComponent } = _options
    dependencies.forEach(component => {
      const rawComponentName = getComponentName(component)
      if (rawComponentName == null) {
        throw new Error(`
            Unable to determine component name. Component: ${component}. Did you forget to add a 'name' attribute?
                `)
      }
      const componentName = _options.componentName({ name: rawComponentName, component: component })
      vue.component(componentName, component)
      onDidRegisterComponent({
        component,
        name: componentName
      })
    })
  }

  function createMixin(options) {
    const _options = normalizedPluginOptions(options)
    const componentsOption = {}
    dependencies.forEach(component => {
      const rawComponentName = getComponentName(component)
      if (rawComponentName == null) {
        throw new Error(`
            Unable to determine component name. Component: ${component}. Did you forget to add a 'name' attribute?
                `)
      }
      const componentName = _options.componentName({ name: rawComponentName, component: component })
      componentsOption[componentName] = component
    })
    return {
      components: componentsOption
    }
  }
  createMixin.install = install
  return createMixin
}
