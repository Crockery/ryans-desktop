import mdx from '@astrojs/mdx';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

export default defineConfig({
  trailingSlash: 'always',
  integrations: [mdx(), vanillaExtractPlugin()]
});
