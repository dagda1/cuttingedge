import React, { CSSProperties } from 'react';
import { Point, Box as BoxType } from './types';
import { Shortcuts } from '../src/components/Shortcuts';
import { shortcutMap } from './shortCutMap';

interface BoxProps {
  index: number;
  onMoveRequest: (point: Partial<Point>, index: number) => void;
}

export const Box: React.FC<BoxType & BoxProps> = ({ x, y, color, index, onMoveRequest }) => {
  const style: CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    textAlign: 'center',
    lineHeight: '100px',
    position: 'absolute',
    top: `${y + index * 120}px`,
    left: `${x + index * 120}px`
  };

  const SHIFT = 10;
  const handleMove = (action) => {
    console.log({ x, y });
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
  };

  return (
    <Shortcuts shortcutMap={shortcutMap} mapKey="BOX" handler={handleMove} scoped>
      <div style={style}>
        {index + 1} ({x}, {y})
      </div>
    </Shortcuts>
  );
};
