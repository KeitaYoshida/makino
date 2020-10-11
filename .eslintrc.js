module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "babel-eslint"
  },
  plugins: [
    "vue"
  ],
  extends: [
    'vuetify',
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
    "prettier/vue"
  ],
};
