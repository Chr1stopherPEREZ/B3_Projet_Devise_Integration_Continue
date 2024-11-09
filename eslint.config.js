module.exports = [
  {
    files: ["src/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Ajoutez ici vos règles ESLint
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

/* eslint.config.js */
