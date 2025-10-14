import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        log: './log.html',
        detail: './detail.html'
      }
    }
  }
})
