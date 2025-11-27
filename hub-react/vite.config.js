import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist"   // <-- THIS CREATES hub-react/dist
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
});
