import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const BACKEND_PORT = Number(process.env.PORT) || 9001;

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9000,
    proxy: {
      '/api': {
        target: `http://localhost:${BACKEND_PORT}`,
        changeOrigin: true,
      },
    },
  },
});
