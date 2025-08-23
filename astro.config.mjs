// @ts-check
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'server'
})