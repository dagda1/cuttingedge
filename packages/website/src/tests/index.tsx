/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ReactElement } from 'react';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

export const wrapComponentInReduxForTesting = (ui: ReactElement) => {
  return {
    ...render(ui),
  };
};
