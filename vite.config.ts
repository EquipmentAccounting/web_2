import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
