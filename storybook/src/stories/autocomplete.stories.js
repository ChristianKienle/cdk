import { getPackage } from '@vue-cdk/examples'

const _package = getPackage('autocomplete')

export default {
    title: 'Autocomplete',
};

export const Default = _package.storyFor('default')
export const Simple = _package.storyFor('simple')
export const AutoHide = _package.storyFor('auto-hide')
export const Themed = _package.storyFor('themed')
