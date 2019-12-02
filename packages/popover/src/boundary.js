export const boundaries = ["scrollParent", "viewport", "window"]
export const defaultBoundary = boundaries[0]
export const isValidBoundary = value => boundaries.indexOf(value) >= 0
