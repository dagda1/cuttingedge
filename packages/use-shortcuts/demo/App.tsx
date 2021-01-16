require('./global.module.scss');
import React, { useState, useCallback } from 'react';
import { Point } from './types';
import { Box as MovableBox } from './Box';
import { shortcutMap1, shortcutMap2 } from './shortCutMap';

// const globalDocumentShortcuts = {
//   alert: { combination: [KeyCode.Ctrl, 'a'] },
// };

// const globalHandler = (action: Action<string>) => {
//   console.log('in globalHandler');
//   switch (action.type) {
//     case 'alert':
//       alert('global alert');
//       return;
//     default:
//       throw new Error('no such action');
//   }
// };

const boxes1 = [
  { x: 50, y: 160, color: 'red' },
  { x: 50, y: 170, color: 'blue' },
];

const boxes2 = [
  { x: 50, y: 360, color: 'black' },
  { x: 50, y: 470, color: 'green' },
];

export const App: React.FC = () => {
  const [boxState1, setState1] = useState(boxes1);
  const [boxState2, setState2] = useState(boxes2);

  const handleMove1 = useCallback((newPosition: Partial<Point>, index: number) => {
    setState1((state) => {
      return state.map((box, i) => {
        return index === i ? { ...box, ...newPosition } : { ...box };
      });
    });
  }, []);

  const handleMove2 = useCallback((newPosition: Partial<Point>, index: number) => {
    setState2((state) => {
      return state.map((box, i) => {
        return index === i ? { ...box, ...newPosition } : { ...box };
      });
    });
  }, []);

  return (
    <div>
      <h1>UseShortcuts</h1>
      <hr />
      <h2>Click on any box and use WSAD</h2>
      {boxState1.map(({ x, y, color }, index) => (
        <MovableBox
          shortcutMap={shortcutMap1}
          key={index}
          color={color}
          index={index}
          x={x}
          y={y}
          onMoveRequest={handleMove1}
        />
      ))}
      <hr />
      {boxState2.map(({ x, y, color }, index) => (
        <MovableBox
          shortcutMap={shortcutMap2}
          key={index}
          color={color}
          index={index}
          x={x}
          y={y}
          onMoveRequest={handleMove2}
        />
      ))}
    </div>
  );
};
