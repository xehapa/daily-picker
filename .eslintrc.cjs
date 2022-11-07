/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
  rules: {
    quotes: [2, "single", { avoidEscape: true }],
    indent: ["error", 2],
    "comma-dangle": 0,
    "prettier/prettier": [
      "warn",
      {
        singleQuote: ["*.{j|t}s"],
        semi: true,
        trailingComma: "all",
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
};
