import path from "node:path";
import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: "jsdom",
    reporters: ["default", "junit"],
    outputFile: "./reports/junit.xml",
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "cobertura", "html"],
      reportsDirectory: "./reports/coverage",
      include: ["src/**"],
      all: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
