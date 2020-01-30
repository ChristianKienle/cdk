import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('match-media')

export default { title: 'Match Media' };

export const helloWorld = _package.importExample('default')
export const inject = _package.importExample('inject')
