import type { Theme } from './types'

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    bg: '#ffffff',
    fg: '#111111',
    primary: '#3b82f6',
  },
  spacing: (n: number) => `${n * 8}px`,
}
export default lightTheme
