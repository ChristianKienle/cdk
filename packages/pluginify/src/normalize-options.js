// @ts-check
import createDefaultOptions from './create-default-options'

export default (options = createDefaultOptions()) => {
  return {
    ...createDefaultOptions(),
    ...options
  }
}
