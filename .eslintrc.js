module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "vue/multi-word-component-names": "off",
  },
};
