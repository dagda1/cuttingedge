# use-shortcuts

Declaratively manage keyboard shortcuts with this react hook.

A thin wrapper around [mousetrap](https://github.com/ccampbell/mousetrap).

Written in typescript so you can take advantage of better typesafety

## install

```sh
# npm
npm install @cutting/react-typed-mousetrap -S

# yarn
yarn add @cutting/react-typed-mousetrap -S
```

## Usage
Declare a `ShortcutMap` object like below of type `ShorcutMap`:

```js
import { useShortcuts } from '@cutting/use-shortcuts';

const MyCmponent: React.FC = () => {
  useShortcuts({
    shortcutMap: {
      MOVE_LEFT: KeyCode.LeftArrow,
    },
    handler: (action) => {
      switch (action.type) {
        case 'MOVE_LEFT':
          console.log('move left');
          break;
        // etc.
      }
    }
  });

  return <div>component</dv>
};
```

In the above example, an object of type [ShortcutMap](./src/types/types.ts) has one key property `MOVE_LEFT` which returns a string value representing a keyboard key.

When the left arrow key is pressed an action is dispatched to the handler function also passed supplied to `useShortcuts` with a type property that matches the key in the `shortcutMap` which in this case is `MOVE_LEFT`.

You can pass simple strings, an array of strings or a `combination` element that requires more than one key to activate or a `sequence` of keys that relies on each key in the sequence being executed before the handler fires.

There is a [KeyCode enum](https://github.com/dagda1/cuttingedge/blob/master/packages/react-typed-mousetrap/src/types/keycodes.ts) to help with the special keys.

Pass a map of values you want to hook up into the hook along with a handler function:

```jsx
  import { ShortcutMap } from '@cutting/use-shortcuts';

  export const shortcutMap: ShortcutMap = {
    MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
    MOVE_RIGHT: [KeyCode.RightArrow, 'd'],
    MOVE_UP: [KeyCode.UpArrow, 'w'],
    MOVE_DOWN: [KeyCode.DownArrow, 's'],
    COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
    SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] },
    SIMPLE_STRING: 'a'
};

const MyCmponent: React.FC = () => {
  const handleMove = useCallback(
    (action: keyof typeof shortcutMap) => {
      switch (action) {
        case 'MOVE_LEFT':
          console.log('move left');
          break;
        // etc.
      }
    },
    [// any deps]
  );

  useShortcuts({
    shortcutMap,
    handler
  });
```

The `useShortcuts` hook will call your handler function passing the name of the key as an `action` argument and the associated `event` object.

In the above example, there is the following configuration element that will trigger a `MOVE_LEFT` action if the left arrow or `a` characters are pressed.

```js
export const shortcutMap: ShortcutMap = {
  MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
```

If the left arrow is pressed or the `a` key is pressed then your handler function will be called like this:

```js
handler('MOVE_LEFT', e);
```

Which is handled in the above example like this:

```js
const handleMove = (action) => {
    switch (action) {
      case 'MOVE_LEFT':
        console.log('move left');
        break;
      // etc.
```

## add event handlers to an html element

By default handlers will be added to the `document` object unless the `ref` attribute is supplied in the  in which case the component is wrapped in an html elemnt that receives the events.

## Props

- `handler`: the function that will receive the action and event arguments which the key sequence triggers.
- `shortcutMap`: A key value pair of
- `ref`: 

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
