module.exports = {
    env: {
        es6: true,
        amd: true,
        browser: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    settings: {
        react: {
            version: 'detect',
            pragma: 'React',
        },
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-no-useless-fragment': ['error', { 'allowExpressions': true }],
        'react/no-array-index-key': 'off',
        'linebreak-style': ['error', 'unix'],

        /*TODO Investigate with base setting
        'react/function-component-definition': ['error', {
            namedComponents: 'function-expression',
            unnamedComponents: 'function-expression',
        }],*/
        'react/function-component-definition': 'off',

        // require specify output of functions
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        '@typescript-eslint/indent': ['error', 4],

        '@typescript-eslint/object-curly-spacing': ['error', 'never'], // https://eslint.org/docs/rules/object-curly-spacing

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
        '@typescript-eslint/no-explicit-any': ['off', { ignoreRestArgs: true }],

        '@typescript-eslint/no-unsafe-argument': 'off',

        '@typescript-eslint/unbound-method': 'off',

        'max-len': ['error', { 'code': 125 }],

        'import/prefer-default-export': 'off', // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md

        'no-import-assign': 'error', // https://eslint.org/docs/rules/no-import-assign

        'default-case-last': 'error', // https://eslint.org/docs/rules/default-case-last

        'default-param-last': 'off',

        'no-promise-executor-return': 'off',

        'yoda': 'off', // https://eslint.org/docs/rules/yoda

        'init-declarations': ['error', 'always'], // https://eslint.org/docs/rules/init-declarations

        // not require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        'jsx-a11y/click-events-have-key-events': 'off',
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': 'off',

        // allow use of void operator as statement
        'no-void': ['error', { 'allowAsStatement': true }], // https://eslint.org/docs/rules/no-void

        // allow parens in arrow function arguments as-needed
        'arrow-parens': ['error', 'as-needed'], // https://eslint.org/docs/rules/arrow-parens

        // allow use of console
        'no-console': 'off', // https://eslint.org/docs/rules/no-console

        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.test.{ts,tsx,js,jsx}', '**/*.stories.tsx'] }],
        'import/order': ['error', {
            'newlines-between': 'always',
            'groups': [
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index',
                'object'
            ],
            'pathGroups': [
                {
                    'pattern': '@material*/**',
                    'group': 'external',
                    'position': 'after'
                },
                {
                    'pattern': '@*/**',
                    'group': 'internal',
                    'position': 'before'
                },
                {
                    'pattern': '*.+(scss|json)',
                    'group': 'index',
                    'patternOptions': { matchBase: true },
                    'position': 'after'
                }
            ],
            'pathGroupsExcludedImportTypes': ['builtin']
        }]
    },
    ignorePatterns: [
        '.eslintrc.js',
        '.babelrc.js',
        'setupProxy.js',
        'jest.config.js',
        'coverage',
        'node_modules',
        'build',
        '**/*.test.ts',
        '**/*.test.tsx',
    ],
};
