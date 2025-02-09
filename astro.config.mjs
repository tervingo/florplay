import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  base: '/florplay',
  integrations: [react()],
  outDir: './dist', // Esto es redundante porque ya es el valor por defecto
  vite: {
    server: {
      fs: {
        allow: [
          'C:/Users/j4alo/Dropbox/Eltomalturta/florplay'
        ]
      }
    }
  }
});