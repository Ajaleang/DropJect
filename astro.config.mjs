// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dropject.com',
  integrations: [
    sitemap({
      filter: (page) => page === 'https://dropject.com/'
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});