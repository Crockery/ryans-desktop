/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:astro/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        "semi": 0,
        "max-len": [
          "warn",
          {
            "code": 90,
            "tabWidth": 2,
            "ignoreTrailingComments": true,
            "ignoreComments": true,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
          }
        ],
        "comma-dangle": ["error", "never"],
        "prefer-promise-reject-errors": "off",
        "camelcase": "off",
        "arrow-parens": ["warn", "always"],
        "no-extra-boolean-cast": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_",
            "caughtErrorsIgnorePattern": "^_"
          }
        ],
        "@typescript-eslint/no-var-requires": "off",
        "function-paren-newline": "off"
      }
    }
  ]
}