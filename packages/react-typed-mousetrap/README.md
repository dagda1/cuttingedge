# react-typed-mousetrap

Declaratively manage keyboard shortcuts on react components.

A thin wrapper around [mousetrap](https://github.com/ccampbell/mousetrap).

Written in typescript so you can take advantage of better typesafety

## install

```sh
# yarn
yarn add @cutting/react-typed-mousetrap -S

# npm
npm install @cutting/react-typed-mousetrap -S
```

## Usage

Declare a `ShortcutMap` object like below of type `ShorcutMap`:

```js
import { ShortcutMap } from '@types/react-typed-mouse';

export const shortcutMap: ShortcutMap = {
  simple: {
    ONE_KEY_EXAMPLE: 'a',
  }
  BOX: {
    MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
    MOVE_RIGHT: [KeyCode.RightArrow, 'd'],
    MOVE_UP: [KeyCode.UpArrow, 'w'],
    MOVE_DOWN: [KeyCode.DownArrow, 's'],
    COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
    SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] },
    SIMPLE_STRING: 'a'
  }
};
```

You can pass simple strings, an array of strings or a `combination` element that requires more than one key to activate or a `sequence` of keys that relies on each key in the sequence being executed before the handler fires.

There is a [KeyCode enum](https://github.com/dagda1/cuttingedge/blob/master/packages/react-typed-mousetrap/src/types/keycodes.ts) to help with the special keys.

Pass the map and the key of values you want to hook up into a component:

```jsx
<Shortcuts shortcutMap={shortcutMap} mapKey="BOX" handler={handleMove} scoped>
  <div>
    {index + 1} ({x}, {y})
  </div>
</Shortcuts>
```

The `Shortcuts` component will call your handler function passing the name of the key as an `action` argument and the associate `event` object.

In the above example, there is the following configuration element:

```js
BOX: {
    MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
```

If the left arrow is pressed or the `a` key is pressed then your handler function will be called like this:

```js
handler('MOVE_LEFT', e);
```

Which is handled in the above example like this:

```js
const SHIFT = 10;

const handleMove = (action) => {
    switch (action) {
      case 'MOVE_LEFT':
        onMoveRequest({ x: x - SHIFT }, index);
        break;
      case 'MOVE_RIGHT':
        onMoveRequest({ x: x + SHIFT }, index);
        break;
      case 'MOVE_UP':
        onMoveRequest({ y: y - SHIFT }, index);
        break;
      case 'MOVE_DOWN':
        onMoveRequest({ y: y + SHIFT }, index);
        break;
      default:
        throw new Error('Unknown action');
    }
```

## scoped

By default handlers will be added to the `document` object unless the `scoped` prop is passed in which case the component is wrapped in an html elemnt that receives the events.

## Props

- `handler`: the function that will receive the action and event arguments which the key sequence triggers.
- `shortcutMap`: - the full configuration object for the application.
- `mapKey`: the key from the `shortcutMap` that contains the configuration for this component.
- `scoped`: `false` by default. If false, events are added to the `document` object. If true, the component is wrapped in a wrapper html elment to which the events are assigned.
  `tabIndex`: The `tab-index` of the html element that wraps the component. `-1` by default. Has no effect if `scoped` is false.
- `ScopedWrapperComponentType`: The type of wrapper html element that wraps components when the `scope` prop is true. Default is `<div />`. Has no effect if `scoped` is false.

## view demo

```sh
yarn start
```

## build

```sh
yarn build
```

## run tests

```sh
yarn test
```
