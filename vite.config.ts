import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lol-generator/', // Reemplaza 'lol-generator' con el nombre de tu repositorio
  build: {
    outDir: 'docs', // Carpeta de salida configurada como 'docs'
  },
})
