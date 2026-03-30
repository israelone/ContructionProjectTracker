import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { githubPagesBasePath } from './site.config'

// https://vite.dev/config/
export default defineConfig({
  base: githubPagesBasePath,
  plugins: [react()],
})
