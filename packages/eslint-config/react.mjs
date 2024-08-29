import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import defaultConfig from './index.mjs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("plugin:react/recommended", "plugin:jsx-a11y/recommended"),
    ...defaultConfig,
    {
        plugins: {
            react,
            "react-hooks": fixupPluginRules(reactHooks),
        },

        languageOptions: {
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                pragma: "React",
                version: "detect",
            },
        },

        rules: {
            "react-hooks/rules-of-hooks": ["error"],

            "react-hooks/exhaustive-deps": ["error", {
                additionalHooks: "(useIsomorphicLayoutEffect)",
            }],

            "react/prop-types": 0,
            "react/react-in-jsx-scope": 0,
        },
    },
];