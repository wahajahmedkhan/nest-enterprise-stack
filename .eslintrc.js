module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nx'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@nx/typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:nestjs/recommended',
        'plugin:promise/recommended',
        'prettier',
      ],
      plugins: [
        '@typescript-eslint',
        'functional',
        'import',
        'no-null',
        'unicorn',
        'prettier',
        'rxjs',
        'nestjs',
        'security',
        'promise',
      ],
      rules: {
        'nestjs/use-validation-pipe': 'error',
        'nestjs/use-dependency-injection': 'error',
        'nestjs/deprecated-api-modules': 'error',
        'nestjs/parse-int-pipe': 'error',
        'prettier/prettier': 'error',
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: 'type:app',
                onlyDependOnLibsWithTags: ['*'],
              },
              {
                sourceTag: 'type:type',
                onlyDependOnLibsWithTags: ['type:type'],
              },
              {
                sourceTag: 'type:util',
                onlyDependOnLibsWithTags: ['type:util', 'type:type'],
              },
              {
                sourceTag: 'type:service',
                onlyDependOnLibsWithTags: [
                  'type:util',
                  'type:type',
                  'type:data-access',
                ],
              },
              {
                sourceTag: 'type:lib',
                onlyDependOnLibsWithTags: [
                  'type:util',
                  'type:type',
                  'type:data-access',
                ],
              },
              {
                sourceTag: 'type:data-access',
                onlyDependOnLibsWithTags: [
                  'type:util',
                  'type:type',
                  'type:data-access',
                ],
              },
              {
                sourceTag: 'type:e2e',
                onlyDependOnLibsWithTags: ['scope:testing'],
              },
            ],
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'rxjs/operators',
                message: 'Import RxJs operators from `rxjs` directly',
              },
            ],
          },
        ],
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
          },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'no-public',
          },
        ],
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'brace-style': ['error', '1tbs'],
        complexity: [
          'error',
          {
            max: 20,
          },
        ],
        'default-case': 'error',
        eqeqeq: ['error', 'always'],
        'functional/immutable-data': 'error',
        'import/no-default-export': 'error',
        'import/no-deprecated': 'off',
        'import/no-unassigned-import': ['error'],
        'linebreak-style': ['error', 'unix'],
        'max-len': [
          'error',
          {
            code: 150,
          },
        ],
        'no-debugger': 'off',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty': [
          'off',
          {
            allowEmptyCatch: true,
          },
        ],
        'no-extra-bind': 'error',
        'no-extra-semi': 'error',
        'no-irregular-whitespace': 'error',
        'no-magic-numbers': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new-func': 'error',
        'no-null/no-null': 'error',
        'no-param-reassign': 'error',
        'no-plusplus': [
          'error',
          {
            allowForLoopAfterthoughts: true,
          },
        ],
        'no-restricted-globals': [
          'error',
          {
            name: 'name',
            message: 'name global variable is deprecated',
          },
          {
            name: 'event',
            message: 'event global variable is deprecated',
          },
          {
            name: 'length',
            message: 'length global variable is not allowed',
          },
          {
            name: 'spyOn',
            message: 'please use jest.spyOn',
          },
        ],
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-void': 'error',
        'object-curly-spacing': ['error', 'always'],
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return',
          },
        ],
        'prefer-destructuring': [
          'error',
          {
            array: true,
            object: true,
          },
        ],
        'prefer-object-spread': 'error',
        'prefer-template': 'error',
        'rxjs/no-cyclic-action': 'error', // From ngrx/recommended. This triggers on every effect, even those that don't re-emit actions, so disabled.
        'rxjs/no-unsafe-takeuntil': [
          'error',
          {
            alias: ['untilDestroyed'],
          },
        ],
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
          },
        ],
        'space-in-parens': ['error', 'never'],
        'unicorn/consistent-destructuring': 'error',
        'unicorn/filename-case': 'error',
        'unicorn/no-zero-fractions': 'error',
        yoda: 'error',
        'security/detect-non-literal-fs-filename': 'error',
        'security/detect-object-injection': 'error',
        'no-sync': 'warn',
        'max-depth': ['error', 4],
        'max-lines-per-function': ['error', 50],
        'max-params': ['error', 4],
        'callback-return': 'warn',
        'jest/no-disabled-tests': 'warn',
        'jest/consistent-test-it': 'error',
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'jest/no-focused-tests': 'error',
        'prefer-destructuring': 'off',
        'functional/immutable-data': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@nx/dependency-checks': 'error',
      },
    },
  ],
};
