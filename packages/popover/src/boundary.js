export const boundaries = ['scrollParent', 'viewport', 'window']
export const defaultBoundary = 'scrollParent'
export const isValidBoundary = (value) => boundaries.indexOf(value) >= 0
