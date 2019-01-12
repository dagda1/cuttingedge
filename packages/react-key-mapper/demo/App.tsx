require('./global.scss');
import React from 'react';
import { Box } from './types';
import { shortcutMap } from './shortCutMap';
import { withShortcuts } from '../src/components/withShortcuts';

const boxes = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }].map(
  (b): Box => {
    return { ...b, color: `hsl(${Math.random() * 360}, 100%, 50%)` };
  }
);

const AppView = () => <h1>Here we are</h1>;

export const App = withShortcuts(shortcutMap, 'BOX', (action: string, e: ExtendedKeyboardEvent) => {
  console.log(action);
})(AppView);
