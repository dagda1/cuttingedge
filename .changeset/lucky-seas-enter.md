---
"@cutting/react-hook-form-components": minor
"@cutting/cloudinary-blurhash": minor
"@cutting/use-get-parent-size": minor
"@cutting/component-library": minor
"@cutting/performance-scout": minor
"@cutting/eslint-config": minor
"@cutting/use-shortcuts": minor
"@cutting/frontend-support": minor
"@cutting/use-mathjax": minor
"@cutting/devtools": minor
"@cutting/markdown": minor
"@cutting/assert": minor
"@cutting/hooks": minor
"@cutting/util": minor
"@cutting/website": minor
"@cutting/svg": minor
---

upgrade pnpm to 11.15.1 and dependency upgrade apart from typescript 7 (pinned at 6.0.3 until typescript-eslint supports the TS 7.1 API), migrate the devtools bundler from rollup to rolldown: declarations now come from rolldown-plugin-dts and minification from rolldown instead of terser, and packages type-check with tsc --noEmit before bundling
