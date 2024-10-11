import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses, including Docker's bridge network
    port: 5173, // Ensure it's the same port you expose in Docker
    watch: {
      usePolling: true, // Necessary when running in Docker for file changes to be detected
    },
    hmr: {
      clientPort: 5173, // Specify the port for HMR (same as your exposed port)
    },
  },
});
