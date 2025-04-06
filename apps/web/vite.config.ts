import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["chunk-ENA3UJBE.js"],
    include: ["react", "react-dom"],
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.ts",
  },
});
