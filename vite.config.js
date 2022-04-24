import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-plugin-hiprint/',
  resolve: {
    alias: {
      "@": '/src',
      '~@': '/src'
    }
  },
  plugins: [
    vue(),
  ],
  server: {
    port: 8000,
  }
})
