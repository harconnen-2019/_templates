module.exports = {
    printWidth: 100,
    tabWidth: 2,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'always',
    quoteProps: 'consistent',
    endOfLine: 'auto',
    overrides: [
      {
        files: '*.{json,yml,md}',
        options: {
          tabWidth: 2,
        },
      },
      {
        files: '*.{ts,tsx}',
        options: {
          parser: 'typescript',
        },
      },
    ],
  };