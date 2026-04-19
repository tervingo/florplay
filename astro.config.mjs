import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  integrations: [
    tailwind(), 
    react(),
  ],
  base: '/',
  build: {
    assets: 'assets'
  },
  vite: {
    cacheDir: 'C:/Users/j4alo/.vite-cache/florplay',
    server: {
      fs: {
        allow: [
          'C:/Users/j4alo/Dropbox/Eltomalturta/'
        ]
      }
    }
  }
});