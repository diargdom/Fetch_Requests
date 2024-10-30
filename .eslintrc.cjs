module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    semi: ["error", "never"],
  },
  overrides: [
    {
      files: ["*.html"],
      rules: {
        indent: ["error", 2], // Indentación específica para archivos HTML
        "react/jsx-curly-spacing": [
          "error",
          { when: "always", children: true },
        ], // Espacios en llaves de JSX
      },
    },
  ],
};
