// @ts-check
// eslint-disable-next-line no-console
const log = console.log
import normalizedPluginOptions from './plugin-options'

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
/**
 * @param {Array<import('vue').Component>} dependencies
 */
export default (...dependencies) => {
  const install = (vue, options) => {
    const _options = normalizedPluginOptions(options)
    const registerComponent = _options.log.registerComponent
    const register = _options.register
    dependencies.forEach(component => {
      const componentName = getComponentName(component)
      if (componentName == null) {
        throw Error(`
            Unable to determine component name. Component: ${component}. Did you forget to add a 'name' attribute?
                `)
      }
      if (registerComponent === true) {
        log(`Register component ${componentName}`)
      }
      vue.component(componentName, component)
      register('component', { name, component })
    })
  }

  const [component] = dependencies
  component.install = install
  return component
}
