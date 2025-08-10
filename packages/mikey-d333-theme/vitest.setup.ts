import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock styled-components
vi.mock('styled-components', () => ({
  default: {
    createGlobalStyle: vi.fn(),
    css: vi.fn(),
    keyframes: vi.fn(),
    ThemeProvider: vi.fn(),
    withTheme: vi.fn(),
  },
  createGlobalStyle: vi.fn(),
  css: vi.fn(),
  keyframes: vi.fn(),
  ThemeProvider: vi.fn(),
  withTheme: vi.fn(),
}))

// Mock React
vi.mock('react', () => ({
  default: {
    createElement: vi.fn(),
    Fragment: 'Fragment',
  },
  createElement: vi.fn(),
  Fragment: 'Fragment',
}))
