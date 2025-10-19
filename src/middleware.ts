import astroConfig from 'astro.config.mjs'
import { middleware as i18nMiddleware } from 'astro:i18n'
import { defineMiddleware, sequence } from 'astro:middleware'

const SUPPORTED_LOCALES = (astroConfig.i18n?.locales || ['es', 'en']) as string[]
const DEFAULT_LOCALE = 'en'

const detectLanguage = defineMiddleware(async (context, next) => {
  const acceptLanguage = context.request.headers.get('accept-language')

  globalThis.console.log('🌐 Accept-Language header:', acceptLanguage)

  let detectedLocale = DEFAULT_LOCALE

  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
    globalThis.console.log('🗣️ Idioma del navegador detectado:', browserLang)

    // Verificar si el idioma detectado está soportado
    if (SUPPORTED_LOCALES.includes(browserLang)) {
      detectedLocale = browserLang
    } else {
      globalThis.console.log('⚠️ Idioma no soportado, usando inglés por defecto')
    }
  }

  // Guardar el locale detectado en context.locals
  context.locals.currentLocale = detectedLocale

  globalThis.console.log('✅ Locale seleccionado:', detectedLocale)

  return next()
})

const astroI18n = i18nMiddleware({
  prefixDefaultLocale: false,
  redirectToDefaultLocale: false,
  fallbackType: 'redirect'
})

// Ejecutar primero i18n, luego detección de idioma
export const onRequest = sequence(astroI18n, detectLanguage)
