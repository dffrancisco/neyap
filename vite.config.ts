import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: ['es2020', 'safari14'],
    },
  },
})
