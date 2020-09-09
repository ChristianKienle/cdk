import { getPackage } from '@vue-cdk/examples'

const _package = getPackage('tooltip')
const themes = _package.collection('themes')

export default { title: 'Tooltip/Themes' }

export const light = themes.storyFor('light')
export const lightWithCustomContent = themes.storyFor('light-custom')
export const dark = themes.storyFor('dark')
export const darkWithCustomContent = themes.storyFor('dark-custom')
export const darkWithoutArrow = themes.storyFor('dark-no-arrow')