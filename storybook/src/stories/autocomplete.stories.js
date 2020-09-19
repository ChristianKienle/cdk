import { getPackage } from '@vue-cdk/examples'

const _package = getPackage('autocomplete')

export default {
    title: 'Autocomplete',
};

export const Default = _package.storyFor('default')