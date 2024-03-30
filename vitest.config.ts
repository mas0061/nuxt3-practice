import path from 'path';
import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'jsdom',
    reporters: ['default', 'junit'],
    outputFile: './reports/junit.xml',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'cobertura', 'html'],
      reportsDirectory: './reports/coverage',
      include: ['src/**'],
      all: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
