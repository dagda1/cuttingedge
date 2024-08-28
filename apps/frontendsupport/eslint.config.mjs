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

export default [{
    ignores: [".cache", "server/index.js", "public/build", "**/*.map"],
}, ...compat.extends(
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:prettier/recommended",
), {
    rules: {
        "react-hooks/rules-of-hooks": ["error", {
            additionalHooks: "(useIsomorphicLayoutEffect)",
        }],

        "react-hooks/exhaustive-deps": ["error", {
            additionalHooks: "(useIsomorphicLayoutEffect)",
        }],

        "prettier/prettier": ["error", {
            printWidth: 120,
            singleQuote: true,
            semi: true,
            tabWidth: 2,
            trailingComma: "all",
        }],
    },
}];