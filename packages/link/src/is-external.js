// @ts-check
// We consider everything to be external that has a protocol.
const EXTERNAL_URL_RE = /^[A-Za-z][A-Za-z0-9+\-.]*:(.*)$/

/** @param {string} urlOrPath */
export default (urlOrPath) => EXTERNAL_URL_RE.test(urlOrPath)
