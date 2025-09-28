import { middleware } from 'astro:i18n'
import { defineMiddleware, sequence } from 'astro:middleware'

const customLogic = defineMiddleware(async (context, next) => {
  const response = await next()

  // Custom logic after resolving the response.
  // It's possible to catch the response coming from Astro i18n middleware.

  return response
})

export const onRequest = sequence(customLogic, middleware({
  prefixDefaultLocale: false,
  redirectToDefaultLocale: false
}))
