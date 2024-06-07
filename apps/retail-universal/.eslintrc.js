module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['plugin:@nx/angular', 'plugin:@angular-eslint/template/process-inline-templates'],
      parserOptions: { project: ['apps/retail-universal/tsconfig.*?.json'] },
      rules: {
        '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'bb', style: 'camelCase' }],
        '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'bb', style: 'kebab-case' }],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
      },
    },
    { files: ['*.html'], extends: ['plugin:@nx/angular-template'], rules: {} },
  ],
};
