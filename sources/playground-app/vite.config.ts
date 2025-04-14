import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import macros from "unplugin-parcel-macros";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [macros.vite(), react(), tailwindcss()],
  build: {
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          "react-router": ["react-router", "react-router-dom"],
        },
      },
    },
  },
});
