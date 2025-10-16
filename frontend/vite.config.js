

import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js"
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"], // formats de rapport
      all: true,
      include: ["src/components/**"], // dossiers à inclure
      exclude: ["node_modules/", "src/main.jsx"]
    }
  }
})
