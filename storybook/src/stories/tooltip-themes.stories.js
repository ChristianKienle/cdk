import { getPackage } from '@vue-cdk/examples'

const _package = getPackage('tooltip')
const themes = _package.collection('themes')

export default { title: 'Tooltip/Themes' }

export const light = themes.importExample('light')
export const lightWithCustomContent = themes.importExample('light-custom')
export const dark = themes.importExample('dark')
export const darkWithCustomContent = themes.importExample('dark-custom')
export const darkWithoutArrow = themes.importExample('dark-no-arrow')