# Cutting Monorepo

## Prerequisites
1. Install Node.js from http://nodejs.org or from your favorite package manager.  At least version 9.3 is required.
2. [Yarn](https://yarnpkg.com/lang/en/) is used over NPM, mainly for the [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) feature, installation instructions can be found [here](https://yarnpkg.com/en/docs/install#mac-stable).  At least Yarn version 1.5.0 is required for yarn workspaces.

 There are initially 4 subpackages supporting the main meridian parent package all running under a `@cutting` scoped yarn package name:

 1. [@cutting/devtools](./packages/devtools/README.md) - Common [webpack](https://webpack.js.org/), [jest](https://facebook.github.io/jest/) and npm **scripts**
 2. [@cutting/react-typed-mousetrap](./packages/devtools/README.md) - Declaratively manage shortcuts on react components.
 2. [@cutting/util](./packages/util/README.md) - Any common functionality applicable to all packages can be found here.
 3. [@cutting/react-scroll](./packages/react-scrollto-any/README.md) - Scroll to any component or scroll the window.
 4. [@cutting/component-library](./packages/component-library/README.md) - Common react components that can be shared among all projects.  This ensures consistency in both styling and functionality.  The [atomic design methodology](http://atomicdesign.bradfrost.com/chapter-2/) will be used to add a logical grouping to the component structure.
 5. [@cutting/connected-components](./packages/connected-components/README.md) - [Redux](https://redux.js.org/) is the defacto state management solution for react at this time of writing and any common redux functionality can be found here.
 6. [@cutting/website](./packages/website/README.md) - Frontend main site code for the [cutting website](http://cutting.**scot**])

Each subpackage above can be deployed or imported as an npm package in isolation.

All packages have tests and most part from `util` have their own viewable demo webserver to display the current functionality.

## Installation instructions

To check everything is working locally, run the following commands:

```sh
yarn install
yarn start
```

When these commands have finished open a browser at [http://localhost:3000](http://localhost:3000)

## Run tests

A combination of the test runner [jest](https://facebook.github.io/jest/) and [enzyme](https://github.com/airbnb/enzyme) are used to unit test the code.

You will need to have perviously ran `yarn install` before running:

```sh
yarn test
```

This will run unit tests in every subpackage of the yarn workspace.  Each subpackage has its own suite of tests that can be executed with the same command when executed in the subdirectory.