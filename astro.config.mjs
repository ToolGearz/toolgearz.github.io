import { defineConfig } from 'astro/config';
import { copyFile } from 'node:fs/promises';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://juttaiblog.online';

const sitemapAlias = {
  name: 'sitemap-root-alias',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir));
    },
  },
};

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site,
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