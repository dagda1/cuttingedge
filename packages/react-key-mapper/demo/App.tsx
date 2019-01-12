require('./global.scss');
import React from 'react';
import { Shortcuts } from '../src/components/Shortcuts';
import { Box } from './types';

const boxes = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }].map(
  (b): Box => {
    return { ...b, color: `hsl(${Math.random() * 360}, 100%, 50%)` };
  }
);

export const App: React.SFC = () => {
  return <h1>rect-key-mapper</h1>;
};
