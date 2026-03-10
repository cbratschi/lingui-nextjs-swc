/** @type {import('@lingui/conf').LinguiConfig} */
const config = {
  locales: ['de', 'en', 'sr', 'es', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    //default: 'en'
    default: 'de'
  },
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src/']
    }
  ],
  compileNamespace: 'ts'
}

export default config