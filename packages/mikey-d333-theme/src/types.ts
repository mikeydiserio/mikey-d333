export type Theme = {
  name: 'light' | 'dark'
  colors: {
    bg: string
    fg: string
    primary: string
  }
  spacing: (n: number) => string
}
