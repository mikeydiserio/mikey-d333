import lightTheme from './light'

export type { Theme } from './types'
// IMPORTANT: pull in the module augmentation so it's in the program
export { darkTheme } from './dark'
export { lightTheme } from './light'
export default lightTheme
