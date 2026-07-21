---
"@cutting/devtools": patch
"@cutting/assert": patch
"@cutting/util": patch
"@cutting/svg": patch
---

add files field to @cutting/assert, @cutting/util and @cutting/svg so published tarballs contain dist: pnpm 11.15.1 applies the root .gitignore when packing, which stripped dist from the previous release, and devtools now fails the build hard when the bundler process cannot be spawned instead of exiting 0
