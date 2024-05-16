module.exports = {
  // Configuration for JavaScript files
  extends: [
    'airbnb-base',
    // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Avoid conflict rule between Prettier and Airbnb Eslint
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
  },
  // Configuration for TypeScript files
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
        'unused-imports',
        'tailwindcss',
        'simple-import-sort',
      ],
      extends: [
        'plugin:tailwindcss/recommended',
        'airbnb',
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        // Avoid conflict rule between Prettier and Airbnb Eslint
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
        // Avoid missing file extension errors, TypeScript already provides a similar feature
        'import/extensions': 'off',
        // Disable Airbnb's specific function type
        'react/function-component-definition': 'off',
        // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/destructuring-assignment': 'off',
        // Allow non-defined react props as undefined
        'react/require-default-props': 'off',
        // _app.tsx uses spread operator and also, react-hook-form
        'react/jsx-props-no-spreading': 'off',
        // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/comma-dangle': 'off',
        // Ensure `import type` is used when it's necessary
        '@typescript-eslint/consistent-type-imports': 'error',
        // Overrides Airbnb configuration and enable no-restricted-syntax
        'no-restricted-syntax': [
          'error',
          'ForInStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        // Named export is easier to refactor automatically
        'import/prefer-default-export': 'off',
        // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/imports': 'error',
        // Export configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error',
        // Avoid conflict rule between `eslint-plugin-import` and `eslint-plugin-simple-import-sort`
        'import/order': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
      },
    },
    // Configuration for testing
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      plugins: ['jest', 'jest-formatting', 'testing-library', 'jest-dom'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
    },
    // Configuration for e2e testing (Playwright)
    {
      files: ['**/*.spec.ts'],
      extends: ['plugin:playwright/recommended'],
    },
    // Configuration for Storybook
    {
      files: ['*.stories.*'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
}
