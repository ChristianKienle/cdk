// ts-check

export const AUTO = 'auto'
export const SAME_AS_TRIGGER = 'same-as-trigger'
export const AT_LEAST_AS_TRIGGER = 'at-least-as-trigger'

export const all = [
  AUTO, // default
  SAME_AS_TRIGGER,
  AT_LEAST_AS_TRIGGER,
]

export const isValid = (value) => all.indexOf(value) >= 0
export const defaultMode = AUTO
