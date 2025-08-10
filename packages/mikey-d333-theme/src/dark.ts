import type { Theme } from './types'

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    bg: '#0b0b0b',
    fg: '#f5f5f5',
    primary: '#60a5fa',
  },
  spacing: (n: number) => `${n * 8}px`,
}

export default darkTheme
