import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  integrations: [
    tailwind(), 
    react(),
  ],
  base: '/florplay',
  build: {
    assets: 'assets'
  },
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