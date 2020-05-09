/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ReactElement } from 'react';
import { render } from '@testing-library/react';

export const wrapComponentInReduxForTesting = (ui: ReactElement) => {
  return {
    ...render(ui),
  };
};
