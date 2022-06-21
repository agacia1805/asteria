module.exports = {
    parser: '@typescript-eslint/parser',
    // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020,
        // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',
        // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,
            // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect',
            // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    plugins: ['sort-destructure-keys', 'sort-keys-fix', 'unicorn', 'prefer-optional-chaining'],
    extends: [
        'plugin:react/recommended',
        // Uses the recommended rules from @eslint-plugin-react
        'plugin:prettier/recommended',
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: '.eslintrc.js',
    rules: {
        'prefer-optional-chaining/prefer-optional-chaining': 'warn',
        // Requires object keys to be sorted.
        // @see https://eslint.org/docs/rules/sort-keys#require-object-keys-to-be-sorted-sort-keys
        'sort-keys-fix/sort-keys-fix': [
            'warn',
            'asc',
            {
                caseSensitive: true,
                natural: true,
            },
        ],

        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'react/prop-types': 'off',

        // Warn, when not using arrow functions in callbacks
        // @see https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 'warn',

        // Prefer method and property shorthand syntax for object literal
        // @see https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': 'warn',

        // Disallows use of optional chaining in contexts where the undefined value is not allowed.
        // @see https://eslint.org/docs/rules/no-unsafe-optional-chaining
        'no-unsafe-optional-chaining': 'warn',

        // Add newline before return, if it's not the only one in the statement
        // @see https://eslint.org/docs/rules/newline-before-return
        'newline-before-return': 'warn',

        // Disallows ternary operators when simpler alternatives exist.
        // @see https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': [
            'warn',
            {
                defaultAssignment: false,
            },
        ],

        // Disallows specified syntax.
        // @see https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'warn',
            {
                selector: 'ImportDeclaration[source.value=/^(\\.\\.\\u002f){2,}/i]',
                message: 'Avoid deep relative import paths',
            },
            {
                selector:
                    ':matches(ArrowFunctionExpression, FunctionExpression, FunctionDeclaration) > BlockStatement > IfStatement:first-child:last-child > BlockStatement[body.length>2]',
                message: 'Prefer early returns',
            },
            {
                selector: 'LogicalExpression[left.property.name="length"][operator="&&"][right.type="JSXElement"]',
                message: `
                Avoid
                checking
                "length"
                property,
                when
                optionally
                returning
                a
                React
                component
                `,
            },
            {
                selector:
                    'ImportDeclaration[source.value=/\\.s?css$/i] ~ ImportDeclaration[importKind="value"][source.value!=/\\.s?css$/i]',
                message: 'Keep styling as the last import declaration',
            },
        ],

        // Require object destructure key to be sorted
        // @see https://www.npmjs.com/package/eslint-plugin-sort-destructure-keys
        'sort-destructure-keys/sort-destructure-keys': [
            'warn',
            {
                caseSensitive: true,
            },
        ],

        'unicorn/no-array-push-push': 'warn',
        'unicorn/no-useless-fallback-in-spread': 'warn',
        'unicorn/no-useless-length-check': 'warn',
        'unicorn/no-useless-spread': 'warn',
        'unicorn/no-useless-undefined': [
            'error',
            {
                checkArguments: false,
            },
        ],
        'unicorn/prefer-add-event-listener': 'warn',
        'unicorn/prefer-array-find': 'warn',
        'unicorn/prefer-array-flat': 'warn',
        'unicorn/prefer-array-index-of': 'warn',
        'unicorn/prefer-array-some': 'warn',
        'unicorn/prefer-includes': 'warn',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                // Uses the recommended rules from the @typescript-eslint/eslint-plugin
                'prettier',
                // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
            ],
            parserOptions: {
                project: ['tsconfig.json'],
            },
            rules: {
                // Consistent brace style
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
                'brace-style': 'off',
                '@typescript-eslint/brace-style': ['error', '1tbs'],

                // Avoid variable hoisting
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
                '@typescript-eslint/no-use-before-define': 'error',

                // Prefer for...of, if the index is only used to access the array
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
                '@typescript-eslint/prefer-for-of': 'error',

                // Prefer array.includes over array.indexOf, where possible
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
                '@typescript-eslint/prefer-includes': 'error',

                // Allow generic any type
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
                '@typescript-eslint/no-explicit-any': 'off',

                // Avoid unused variables
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {
                        ignoreRestSiblings: true,
                    },
                ],

                // Disable. Function doesn't have a return type
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
                '@typescript-eslint/explicit-function-return-type': 'off',

                // Disable, warning, when defining an empty interface
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
                '@typescript-eslint/no-empty-interface': 'off',

                // Avoid relying on Automatic Semicolon Insertion
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
                semi: 'off',
                '@typescript-eslint/semi': 'error',

                // Allow trivially inferred types to be defined manually
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
                '@typescript-eslint/no-inferrable-types': 'off',

                // Prefer using arrow functions, to keep correct this context
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
                '@typescript-eslint/no-this-alias': [
                    'error',
                    {
                        allowDestructuring: true,
                    },
                ],

                // Non-string arrays should always be sorted with a custom compare function, to avoid incorrect results
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
                '@typescript-eslint/require-array-sort-compare': [
                    'error',
                    {
                        ignoreStringArrays: true,
                    },
                ],

                // Always prefer dot notation
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
                'dot-notation': 'off',
                '@typescript-eslint/dot-notation': 'error',

                // Asynchronous functions should use the "await" keyword
                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
                'require-await': 'off',
                '@typescript-eslint/require-await': 'error',

                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
                '@typescript-eslint/prefer-nullish-coalescing': 'off',

                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
                '@typescript-eslint/prefer-optional-chain': 'warn',

                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
                '@typescript-eslint/explicit-module-boundary-types': 'off',

                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
                '@typescript-eslint/no-empty-function': 'off',

                // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
                '@typescript-eslint/no-non-null-assertion': 'off',

                // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
                '@typescript-eslint/member-ordering': [
                    'warn',
                    {
                        default: {
                            order: 'alphabetically',
                        },
                    },
                ],
            },
        },
    ],
};
