import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import auth from 'auth-astro';


export default defineConfig({
  integrations: [mdx(), react(), tailwind(), auth()],
  output: 'server',
  adapter: vercel(),
});