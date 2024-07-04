module.exports = {
  env: { browser: true, jest: true, node: true },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Place to specify custom ESLint rules.
    // e.g., "@typescript-eslint/explicit-function-return-type": "off",
  },
};
