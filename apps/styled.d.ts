import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      background: string
      text: string
      textLight: string
      border: string
      white: string
      dark: string
      light: string
      gray: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    radii: {
      sm: string
      md: string
      lg: string
    }
    shadows: {
      sm: string
      md: string
      lg: string
    }
  }
}
