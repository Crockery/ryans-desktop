/** @type {import("prettier").Config} */
module.exports = {
  // i am just using the standard config, change if you need something else
  ...require('prettier-config-standard'),
  useTabs: true,
  singleQuote: true,
  trailingComma: "none",
  semi: false,
  printWidth: 100,
  pluginSearchDirs: false,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}