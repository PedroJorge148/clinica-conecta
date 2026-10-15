import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Adicione esta linha
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Adicione esta linha aqui dentro
  ],
  resolve:{
    alias:{
      // 2. Mapeia os atalhos para a pasta src correspondente
      '@components': path.resolve(import.meta.dirname, 'src/components'),
      '@pages': path.resolve(import.meta.dirname, 'src/pages'),
      '@utils': path.resolve(import.meta.dirname, 'src/utils'),
      '@services': path.resolve(import.meta.dirname, 'src/services'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
  },
});