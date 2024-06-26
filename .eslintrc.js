const path = require('path');

module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nx', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: 'scope:shared',
                onlyDependOnLibsWithTags: ['scope:shared'],
              },
              {
                sourceTag: 'scope:business',
                onlyDependOnLibsWithTags: ['scope:business', 'scope:shared'],
              },
              {
                sourceTag: 'scope:retail',
                onlyDependOnLibsWithTags: ['scope:retail', 'scope:shared'],
              },
              {
                sourceTag: 'scope:wealth',
                onlyDependOnLibsWithTags: ['scope:wealth', 'scope:shared'],
              },
              {
                sourceTag: 'region:usa',
                onlyDependOnLibsWithTags: ['region:usa', 'region:agnostic'],
              },
              {
                sourceTag: 'region:universal',
                onlyDependOnLibsWithTags: ['region:universal', 'region:agnostic'],
              },
              {
                sourceTag: 'region:agnostic',
                onlyDependOnLibsWithTags: ['region:agnostic'],
              },
              {
                sourceTag: 'type:app',
                onlyDependOnLibsWithTags: [
                  'type:feature',
                  'type:ui',
                  'type:util',
                  'type:data-access-mock',
                  'type:assets',
                ],
              },
              {
                sourceTag: 'type:feature',
                onlyDependOnLibsWithTags: ['type:feature', 'type:ui', 'type:util', 'type:assets'],
              },
              {
                sourceTag: 'type:ui',
                onlyDependOnLibsWithTags: ['type:ui', 'type:util'],
              },
              {
                sourceTag: 'type:util',
                onlyDependOnLibsWithTags: ['type:util'],
              },
              {
                sourceTag: 'type:assets',
                onlyDependOnLibsWithTags: [],
              },
              {
                sourceTag: 'type:data-access-mock',
                onlyDependOnLibsWithTags: ['type:data-access-mock', 'type:feature', 'type:util'],
              },
            ],
          },
        ],
        'import/no-extraneous-dependencies': ['error'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nx/typescript'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
    {
      files: '*.json',
      parser: 'jsonc-eslint-parser',
      rules: {},
    },
  ],
};
