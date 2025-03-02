import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["chunk-ENA3UJBE.js"],
    include: ["react", "react-dom"],
  },
  plugins: [react(), tsconfigPaths()],
});
