import type { CSSProperties } from 'react';
import React, { useCallback } from 'react';

import { Shortcuts } from '../../src/components/Shortcuts/Shortcuts';
import type { Action } from '../../src/types/types';
import type { shortcutMap1 } from './shortCutMap';
import type { Box as BoxType, Point } from './types';

interface BoxProps {
  index: number;
  onMoveRequest: (point: Partial<Point>, index: number) => void;
  shortcutMap: typeof shortcutMap1 | typeof shortcutMap1;
}

export const Box: React.FC<BoxType & BoxProps> = ({ shortcutMap, x, y, color, index, onMoveRequest }) => {
  const style: CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    textAlign: 'center',
    lineHeight: '100px',
    position: 'absolute',
    color: 'white',
    top: `${y + index * 120}px`,
    left: `${x + index * 120}px`,
  };

  const SHIFT = 10;
  const handleMove = useCallback(
    (action: Action<'MOVE_LEFT' | 'MOVE_RIGHT' | 'MOVE_UP' | 'MOVE_DOWN'>) => {
      switch (action.type) {
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
    },
    [index, onMoveRequest, x, y],
  );

  return (
    <Shortcuts shortcutMap={shortcutMap} handler={handleMove}>
      <div style={style}>
        {index + 1} ({x}, {y})
      </div>
    </Shortcuts>
  );
};
