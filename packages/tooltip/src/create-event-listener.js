// @ts-check
/**
 * @template {keyof DocumentEventMap} K
 * @param {K} type
 * @param {HTMLElement | Document} subject
 * @param {(event: DocumentEventMap[K]) => void} handler
 */
const createEventListener = (type, subject, handler) => {
  let isOn = false
  return {
    isOn: () => isOn,
    on() {
      if (isOn) {
        throw Error('cannot enable a listener that is already enabled')
      }
      isOn = true
      subject.addEventListener(type, handler)
      return this
    },
    off() {
      if (isOn === false) {
        throw Error('cannot disable a listener that is not enabled')
      }
      isOn = false
      subject.removeEventListener(type, handler)
      return this
    },
  }
}

export default createEventListener
