# Cutting Monorepo

## Prerequisites
1. Install Node.js from http://nodejs.org or from your favorite package manager.  At least version 9.3 is required.


 This is the main monorepo README.  The monorepo contains the following packages:

 1. [@cutting/devtools](./packages/devtools/README.md) - Common [webpack](https://webpack.js.org/), [vitest](https://github.com/vitest-dev/vitest) and npm **scripts**
 2. [@cutting/util](./packages/util/README.md) - Any common functionality applicable to all packages can be found here.
 3. [@cutting/use-shortcuts](./packages/use-shortcuts/README.md) - Effortlessly create keyboard shortcust with this react hook.
 5. [@cutting/component-library](./packages/component-library/README.md) - Common react components that can be shared among all projects.  This ensures consistency in both styling and functionality.  The [atomic design methodology](http://atomicdesign.bradfrost.com/chapter-2/) will be used to add a logical grouping to the component structure.
 7. [@cutting/website](./apps/website/README.md) - Frontend main site code for the [cutting website](http://cutting.**scot**])

Each subpackage above can be deployed or imported as an npm package in isolation.

All packages have tests and most part from `util` have their own viewable demo webserver to display the current functionality.

## Installation instructions

[pnpm](https://pnpm.io/) is the package manager used throughout the monorepo.

To check everything is working locally, run the following commands:

```sh
pnpm install
pnpm run start
```

When these commands have finished open a browser at [http://localhost:3000](http://localhost:3000)

## Run tests

A combination of the test runner [vitest](https://github.com/vitest-dev/vitest) and [react-testing-library](https://github.com/testing-library/react-testing-library) are used to unit test the code.

You will need to have perviously ran `pnpm install` before running:

```sh
pnpm test
```

This will run unit tests in every subpackage of the monorepo.  Each subpackage has its own suite of tests that can be executed with the same command when executed in the subdirectory.