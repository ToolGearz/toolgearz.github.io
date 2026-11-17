import { defineConfig } from 'astro/config';
import { copyFile } from 'node:fs/promises';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const sitemapAlias = {
  name: 'sitemap-root-alias',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir));
    },
  },
};

export default defineConfig({
  output: 'static',
  site: 'https://toolgearz.github.io',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !pathname.startsWith('/demos') && pathname !== '/portfolio';
      },
    }),
    sitemapAlias,
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});