import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Netlify için mutlaka '/' olmalı
  plugins: [react()],
})