/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	experimental: {
		serverActions: true,
	},
	i18n: {
		locales: ['fr'],
		defaultLocale: 'fr',
	},
}

export default config
