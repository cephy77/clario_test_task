import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://cephy77.github.io/clario_test_task",
  plugins: [react()],
  resolve: {
    alias: {
      '@variables': path.resolve(__dirname, 'src/style/variables.scss'),
      '@mixins': path.resolve(__dirname, 'src/style/mixins.scss'),
    },
  },
})
