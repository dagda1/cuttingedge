# @cutting/component-library

Common react components that can be shared among all projects. This ensures consistency in both styling and functionality.

The [atomic design methodology](http://atomicdesign.bradfrost.com/chapter-2/) will be used to add a logical grouping to the component structure.

## view functionality

```sh
pnpm start
```

## build

```sh
pnpm build
```

## run tests

```sh
pnpm test
```

## Third-party code

`src/style/util/flatten-children.ts` is copied and modified from [react-keyed-flatten-children](https://github.com/grrowl/react-keyed-flatten-children/blob/0b4fd6dad491905e73551c9d4496198f6b87eb41/index.ts).

## Style notes

`src/components/atoms/TextLink/TextLink.css.ts` repeats `textDecorationThickness` under `:hover`. Browsers that support the `text-decoration` shorthand reset the thickness when the shorthand is applied. The long-form `text-decoration-line` is not used, because the browser support policy includes Edge 16.
