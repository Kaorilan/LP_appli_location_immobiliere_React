import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic", // React 18
    }),
  ],
  test: {
    globals: true,          // permet d'utiliser test() et expect() sans import
    environment: "jsdom",   // simule le DOM pour React Testing Library
    setupFiles: "./src/setupTests.js", // ton setup pour jest-dom
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      all: true,
    },
  },
});
