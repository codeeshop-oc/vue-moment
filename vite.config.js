import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),    
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/vue-moment.js'),
      name: 'VueMoment',
      formats: ['es', 'umd'],
      fileName: format => `vue-moment.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})