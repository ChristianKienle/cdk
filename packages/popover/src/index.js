import pluginify from '@vue-cdk/pluginify'
import Popover from './popover.vue'
import PopoverContent from './content.vue'
import PopoverArrow from './arrow.vue'

export default pluginify(Popover, PopoverContent, PopoverArrow)
export { Popover, PopoverContent, PopoverArrow }
