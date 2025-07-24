import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
      all: true,
      enabled: true,
      include: ['packages/**/*.{ts,tsx}'],
      exclude: ['packages/**/*.styles.ts', 'packages/**/index.ts'],
      reportsDirectory: './coverage',
    },
  },
});