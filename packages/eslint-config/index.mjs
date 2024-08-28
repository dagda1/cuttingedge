import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
            "simple-import-sort": simpleImportSort,
            import: fixupPluginRules(_import),
        },

        languageOptions: {
            globals: {
                MyGlobal: true,
            },

            parser: tsParser,
        },

        rules: {
            "@typescript-eslint/no-parameter-properties": ["off"],
            "@typescript-eslint/no-namespace": ["off"],

            "@typescript-eslint/explicit-module-boundary-types": ["error", {
                allowArgumentsExplicitlyTypedAsAny: true,
            }],

            "@typescript-eslint/consistent-type-imports": "error",
            "no-var": "warn",

            "@typescript-eslint/no-empty-object-type": "error",

            curly: "error",
            eqeqeq: ["error", "always"],
            "prefer-const": "warn",

            "prettier/prettier": ["error", {
                printWidth: 120,
                singleQuote: true,
                semi: true,
                tabWidth: 2,
                trailingComma: "all",
            }],

            semi: ["error", "always"],
            "no-unused-vars": "off",

            "@typescript-eslint/no-unused-vars": ["error", {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            }],

            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",
            "import/no-unresolved": "off",
            "import/consistent-type-specifier-style": "off",
        },
    },
    {
        files: ["**/*.js"],

        rules: {
            "prettier/prettier": ["error", {
                printWidth: 140,
                singleQuote: true,
                semi: true,
                tabWidth: 2,
                trailingComma: "none",
            }],

            semi: ["error", "always"],
            "@typescript-eslint/no-use-before-define": ["off"],
            "@typescript-eslint/camelcase": ["off"],
            "@typescript-eslint/no-var-requires": ["off"],
            "no-var": ["off"],
        },
    },
];