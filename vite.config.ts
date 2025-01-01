import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", // Use Terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Optional: Removes console statements
        drop_debugger: true, // Optional: Removes debugger statements
      },
      output: {
        comments: false, // Remove comments from the output
      },
    },
  },
});
