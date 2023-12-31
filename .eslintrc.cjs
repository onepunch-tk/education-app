module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    "tailwindcss/no-custom-classname":"off",
    "tailwindcss/classnames-order":"error"
  },
  settings: {
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ["classnames", "clsx", "cls","tv"],
      config: "tailwind.config.js", // returned from `loadConfig()` utility if not provided
      cssFiles: [
        "**/*.css",
        "!**/node_modules",
        "!**/.*",
        "!**/dist",
        "!**/build",
      ],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      tags: [],
      classRegex: "tv\\\\((([^()]*|\\\\([^()]*\\\\))*)\\\\) ", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
    },
  }
}
