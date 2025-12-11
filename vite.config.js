import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        client: './src/entry-client.js',
        server: './src/entry-server.js'
      }
    },
    ssr: './src/entry-server.js'
  }
})
