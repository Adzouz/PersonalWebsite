import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  // Only variables with these prefixes are exposed to client code via
  // `import.meta.env`. `REACT_APP_` is kept for existing deployment env vars.
  envPrefix: ['VITE_', 'REACT_APP_'],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/mixins" as *;
        `,
      },
    },
  },
});
