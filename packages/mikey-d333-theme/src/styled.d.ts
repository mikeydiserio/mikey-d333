import type { Theme } from '@mikey-d333/theme'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      bg: string
      fg: string
      primary: string
      cardBorder: string
      cardBackground: string
      text: string
    }
    shadows: {
      default: string
      small: string
      medium: string
      large: string
    }
  }
}
