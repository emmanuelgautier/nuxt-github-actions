module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
