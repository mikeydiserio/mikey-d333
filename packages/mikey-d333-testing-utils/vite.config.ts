// vitest.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    react({
      babel: { plugins: ['babel-plugin-styled-components'] },
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    setupFiles: ['./packages/testing-utils/src/test-setup.tsx'],
  },
})
