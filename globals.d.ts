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
      iconColor: string
      iconHoverColor: string
      sidebarHoverBg: string
      logoutButton: string
      danger: string
      gray: {
        100: string
        200: string
        300: string
        400: string
        500: string
      }
    }
    shadows: {
      default: string
      small: string
      medium: string
      large: string
    }
  }
}
