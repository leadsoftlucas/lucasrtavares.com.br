// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://lucasrtavares.com.br',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
