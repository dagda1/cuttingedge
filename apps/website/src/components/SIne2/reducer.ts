import type { ScaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import produce from 'immer';
import type { Reducer } from 'react';

export const TWO_PI = Math.PI * 2;

const increase = TWO_PI / 360;

type Direction = 'FORWARDS' | 'BACKWARDS';

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

type State = {
  time: number;
  direction: Direction;
  xTo: number;
  unitCircleCx: number;
  radius: number;
  hypotenuse: Line;
  opposite: Line;
  adjacent: Line;
  angle: number;
  sineData: number[];
};

export const initialState: State = {
  time: 0,
  direction: 'FORWARDS',
  radius: 0,
  xTo: 0,
  hypotenuse: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  },
  opposite: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  },
  adjacent: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  },
  unitCircleCx: 0,
  angle: 0,
  sineData: [],
};

type Actions = {
  type: 'TICK';
  payload: {
    xScale: ScaleLinear<number, number, never>;
    yScale: ScaleLinear<number, number, never>;
  };
};

const getNextDirection = (direction: Direction, time: number): Direction => {
  if (direction === 'FORWARDS' && time > TWO_PI) {
    return 'BACKWARDS';
  }

  if (direction === 'BACKWARDS' && time < 0) {
    return 'FORWARDS';
  }

  return direction;
};

export const reducer: Reducer<State, Actions> = produce((state, action) => {
  switch (action.type) {
    case 'TICK': {
      const { xScale, yScale } = action.payload;

      const nextTime = state.direction === 'FORWARDS' ? state.time + increase : state.time - increase;
      const nextDirection = getNextDirection(state.direction, nextTime);

      const xTo = xScale(nextTime);

      const radius = yScale(0);

      const unitCircleCx = 0 - radius;

      const dx = radius * Math.cos(nextTime);
      const dy = radius * -Math.sin(nextTime);

      const hypotenuseCentre = xTo - dx;

      const hypotenuse = select('hypotenuse');

      const hypotenuseCoords = {
        x1: hypotenuseCentre,
        y1: parseFloat(hypotenuse.attr('y1')),
        x2: xTo,
        y2: dy,
      };

      let angle = Math.atan2(hypotenuseCoords.y2 - hypotenuseCoords.y1, hypotenuseCoords.x2 - hypotenuseCoords.x1);

      if (angle > 0) {
        angle = -2 * Math.PI + angle;
      }

      angle = angle + Math.PI / 2;

      if (nextDirection === 'FORWARDS') {
        state.sineData.push(nextTime);
      } else {
        state.sineData.pop();
      }

      return {
        ...state,
        time: nextTime,
        direction: nextDirection,
        radius,
        hypotenuse: {
          ...hypotenuseCoords,
        },
        unitCircleCx,
        angle,
        opposite: {
          x1: xTo,
          y1: 0,
          x2: xTo,
          y2: dy,
        },
        adjacent: {
          x1: 0,
          y1: 0,
          x2: xTo,
          y2: 0,
        },
      };
    }
    default:
      return state;
  }
});
