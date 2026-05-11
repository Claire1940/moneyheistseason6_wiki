import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	// Supported locales (max 4 including English)
	locales: ['en', 'es', 'pt', 'de'],

	// Default locale
	defaultLocale: 'en',

	// Default locale without URL prefix
	localePrefix: 'as-needed',

	// Enable auto locale detection
	localeDetection: true,
})

export type Locale = (typeof routing.locales)[number]
