import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works whether it's served from a GitHub Pages
  // project subpath (username.github.io/repo-name/) or a custom domain root.
  base: './',
})
