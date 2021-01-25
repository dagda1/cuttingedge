import { assert } from 'assert-ts';
import type { ReactElement } from 'react';
import { DeepPartial, isNil } from '@cutting/util';
import { RenderOptions } from '../types/types';
import merge from 'deepmerge';

const DefaultRenderOptions: RenderOptions = { viewport: { width: 600, height: 800, deviceScaleFactor: 1 } };

export const render = async (reactElement: ReactElement, options: DeepPartial<RenderOptions> = {}): Promise<void> => {
  const testName = window.__path.join(' ');

  assert(isNil(window.__tests[testName]), `a test named ${testName} already exists`);

  window.__tests[testName] = {
    ...merge(options, DefaultRenderOptions),
    ...{
      reactElement,
      path: [...window.__path],
    },
  };
};
