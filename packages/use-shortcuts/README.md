# use-shortcuts

Effortlessly create keyboard shortcuts with this react hook.

`use-shortcuts` is really a thin wrapper around [mousetrap](https://github.com/ccampbell/mousetrap).

`use-shortcuts` is written in typescript so you can take advantage of better typesafety

## install

```sh
# npm
npm install @cutting/use-shortcuts -S

# yarn
yarn add @cutting/use-shortcuts -S
```

## Usage

```js
import type { FC } from 'react';
import { useShortcuts } from '@cutting/use-shortcuts';

const MyCmponent: FC = () => {
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
In the above example, the `useShortcuts` hook is called and a configurtion object of type `UseShortcuts` is supplied as an argument:

```javascript
export interface UseShortcuts {
  shortcutMap: ShortcutMap;
  handler: ShortcutHandler;
  ref?: RefObject<HTMLElement>;
}
```
The configuration object has a required property `shortcutMap` which is a key value pair of *actions* that are dispatched when keyboard events are triggered.

In this example, if the `a` key is pressed, the `useShortcuts` hook will dispatch an action object of `{ type: 'MOVE_LEFT' }` to the handler function that is also a required field of the configuration object.

The `handler` attribute takes a function that expects an `Action` object:

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

const MyCmponent: FC = () => {
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

  return <div>component</dv>
```

## configuration

`useShortcuts` takes a configuration object of type [UseShortcuts](./src/types/types):

```javascript
export interface UseShortcuts {
  shortcutMap: ShortcutMap;
  handler: ShortcutHandler;
  ref?: RefObject<HTMLElement>;
}
```

|field   |  description |
|---|---|
| shortcutMap  | A key value pair object where the keys are the actions tht get dispatched and the values are the keys that invoke the actions.  |
| handler  | The function that `useShortcuts` will call with the action keys from the `shortcutMap`   |
| ref  |an optional `RefObject<HTMLElement>` that will have add the keyboard event listeners bound to.  If `ref` is omitted then the event listeners will be added to the document object.   |

## adding event listeners to an html element

By default event listeners are added to the `document` object unless the `ref` attribute is supplied in the configuration, in which case the event handlers are added to that element when it is in the DOM:

```javascript
export const Comp: FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('');

  useShortcuts({
    shortcutMap: {
      AAA: 'a',
    },
    handler: (action: Action) => {
      console.log(action);
    },
    ref,
  });


  return (
    <input
      type="text"
      ref={ref}
      value={text}
      onChange={e => setText(e.target.value)}
    />
  )
}
```

## build

```sh
yarn build
```

## run tests

```sh
npm test
```
