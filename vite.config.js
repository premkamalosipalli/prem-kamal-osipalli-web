import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG'],
  plugins: [react()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  },
  server:{
    port: 8005,
  }
})
