export type Attrs = { [name: string]: string }
export interface Data {
  attrs: Attrs
}
// export interface MarkdownNode {
//   render(): string
//   children: MarkdownNode[]
// }

// export type MarkdownNode<Options = object> = {
//   before(): string
//   after(): string
//   children: MarkdownNode[]
//   options?: Options
// }
// const createItem = (text, bullet) => {
// return {
//   children: [`$`]
// }
// }
// const createList = ({
//   before: () => '',
//   after: () => '',
//   children: () => {

//   }
// })