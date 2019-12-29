import { ParserResult } from '@vuese/parser'

// Type for our improved parser result.
// We simply extend ParserResult and add props prefixed with $ that add a little bit of convenience.
export interface ImprovedResult extends ParserResult {
  $description: string
}
