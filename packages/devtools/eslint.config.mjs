import defaultConfig from '@cutting/eslint-config/eslint'

/** @type {import("eslint").Linter.Config} */
export default [{ignores: ['tools']}, ...defaultConfig]