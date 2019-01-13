require('./global.scss');
import React, { useState } from 'react';
import { Box, Point } from './types';
import { Box as MovableBox } from './Box';

const boxes = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }].map(
  (b): Box => {
    return { ...b, color: `hsl(${Math.random() * 360}, 100%, 50%)` };
  }
);

export const App: React.FC = () => {
  const [boxState, setState] = useState(boxes);

  const handleMove = (newPosition: Partial<Point>, index: number) => {
    setState((state) => {
      return state.map((box, i) => {
        return index === i ? { ...box, ...newPosition } : { ...box };
      });
    });
  };

  return (
    <div>
      <h1>Click on any box and use arrow keys or WSAD</h1>
      {boxState.map(({ x, y, color }, index) => (
        <MovableBox key={index} color={color} index={index} x={x} y={y} onMoveRequest={handleMove} />
      ))}
    </div>
  );
};
