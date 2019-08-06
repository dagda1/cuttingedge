# use-shortcuts

Effortlessly create keyboard shortcuts with this react hook.

A thin wrapper around [mousetrap](https://github.com/ccampbell/mousetrap).

Written in typescript so you can take advantage of better typesafety

## install

```sh
# npm
npm install @cutting/use-shortcuts -S

# yarn
yarn add @cutting/use-shortcuts -S
```

## Usage
Declare a `ShortcutMap` object like below of type `ShorcutMap`:

```js
import { useShortcuts } from '@cutting/use-shortcuts';

const MyCmponent: React.FC = () => {
  useShortcuts({
    shortcutMap: {
      MOVE_LEFT: 'a',
    },
    handler: (action, e) => {
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

The `useShortcuts` hook will call your handler function passing the name of the key as an `action` argument and the associated `event` object.

In the above example, there is the following configuration element that will trigger a `MOVE_LEFT` action if the `a` character is pressed.

The `handler` field takes a function that expects an `Action` object:

```javascript
(action: { type: string } => void)
```
## Keys and Key sequences

You can pass simple strings, an array of strings or a `combination` element that requires more than one key to activate or a `sequence` of keys that relies on each key in the sequence being executed before the handler fires.

There is a [KeyCode enum](./src/types/keycodes.ts) to help with the special keys.

```jsx
  import { ShortcutMap } from '@cutting/use-shortcuts';

  export const shortcutMap: ShortcutMap = {
    // 'x' dispatches { type: 'SIMPLE_STRING' }
    SIMPLE_STRING: 'x',
    // left arrow or 'a' dispatch {type: 'MOVE_LEFT' }
    MOVE_LEFT: [KeyCode.LeftArrow, 'a'],
    // right arrow or 'd' dispatch {type: 'MOVE_RIGHT' }
    MOVE_RIGHT: [KeyCode.RightArrow, 'd'], either
    // ctrl + f dispatches { type: 'COMBINATION_EXAMPLE' }
    COMBINATION_EXAMPLE: { combination: [KeyCode.Ctrl, 'f'] },
    // x followed by c dispatches { type: 'SEQUENCE_EXAMPLE' }
    SEQUENCE_EXAMPLE: { sequence: ['x', 'c'] },
};

const MyCmponent: React.FC = () => {
  const handleMove = useCallback(
    (action: keyof typeof shortcutMap) => {
      switch (action) {
        case 'MOVE_LEFT':
          console.log('move left');
          break;
        case 'MOVE_RIGHT':
          console.log('move right');
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

## configuration

`useShortcuts` takes a configuration object of type [UseShortcuts](./src/types/types):

```javascript
export interface UseShortcuts {
  shortcutMap: ShortcutMap;
  handler: ShortcutHandler;
  ref?: React.RefObject<HTMLElement>;
}
```

|field   |  description |
|---|---|
| shortcutMap  | A key value pair object where the keys are the actions tht get dispatched and the values are the keys that invoke the actions.  |
| handler  | The function that `useShortcuts` will call with the action keys from the `shortcutMap`   |
| ref  |an optional `React.RefObject<HTMLElement>` that will have add the keyboard event listeners bound to.  If `ref` is omitte then the event listeners will be added to the document object.   |

## adding event listeners to an html element

By default event listeners are added to the `document` object unless the `ref` attribute is supplied in the  in which case the component is wrapped in an html elemnt that receives the events.

## build

```sh
npm run build
```

## run tests

```sh
npm test
```
