import { getPackage } from '@vue-cdk/examples'

const _package = getPackage('client-only')

export default {
    title: 'Client Only',
};

export const Default = _package.storyFor('default')