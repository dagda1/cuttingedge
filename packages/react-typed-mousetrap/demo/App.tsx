require('./global.module.scss');
import React, { useState, useCallback } from 'react';
import { Box, Point } from './types';
import { Box as MovableBox } from './Box';
import { Shortcuts } from '../src/components/Shortcuts';
import { ShortcutMap, KeyCode, Action } from '@cutting/use-shortcuts';

const globalDocumentShortcuts: ShortcutMap = {
  alert: { combination: [KeyCode.Ctrl, 'a'] }
};

const globalHandler = (action: Action) => {
  switch (action.type) {
    case 'alert':
      alert('global alert');
      return;
    default:
      throw new Error('no such action');
  }
};

const boxes = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }].map(
  (b): Box => {
    // eslint-disable-next-line no-console
    console.log(b);
    return { ...b, color: `hsl(${Math.random() * 360}, 100%, 50%)` };
  }
);

export const App: React.FC = () => {
  const [boxState, setState] = useState(boxes);

  const handleMove = useCallback((newPosition: Partial<Point>, index: number) => {
    setState((state) => {
      return state.map((box, i) => {
        return index === i ? { ...box, ...newPosition } : { ...box };
      });
    });
  }, []);

  return (
    <div>
      <h1>Click on any box and use arrow keys or WSAD</h1>
      <Shortcuts shortcutMap={globalDocumentShortcuts} handler={globalHandler} />
      {boxState.map(({ x, y, color }, index) => (
        <MovableBox key={index} color={color} index={index} x={x} y={y} onMoveRequest={handleMove} />
      ))}
    </div>
  );
};

export default App;
