module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended", // Добавляет правила Prettier в ESLint
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "jsx-a11y/click-events-have-key-events": "off",
  },
};
