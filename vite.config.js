import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      enabled: true,
      reportsDirectory: "./tests/coverage",
      reporters: ["html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@Components": path.resolve(__dirname, "./src/Components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
