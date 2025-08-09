import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

react({
  babel: { plugins: ['babel-plugin-styled-components'] },
})
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    setupFiles: ['./packages/mikey-d333-testing-utils/src/test-setup.ts'],
    // If your packages live in /packages, this covers all
    include: ['packages/**/?(*.)+(spec|test).[tj]s?(x)'],
    coverage: {
      provider: 'istanbul',
      all: true,
      enabled: true,
      include: ['packages/**/*.{ts,tsx}'],
      exclude: ['packages/**/*.styles.ts', 'packages/**/index.ts'],
      reportsDirectory: './coverage',
    },
  },
})
