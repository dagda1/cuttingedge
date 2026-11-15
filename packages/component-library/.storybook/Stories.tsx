/* eslint-disable react/display-name */
import type { FunctionComponent } from 'react';

import { ApplicationLayout } from '../src/components/templates/ApplicationLayout/ApplicationLayout';
import { cuttingTheme } from '../src/style/themes/cutting/cutting.css';
import { defaultTheme } from '../src/style/themes/default/default.css';
import { salesTheme } from '../src/style/themes/sales/salesTheme.css';
import * as styles from './Stories.css';

const themes = {
  defaultTheme,
  cuttingTheme,
  salesTheme,
} as const;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function themedSelect() {
  return {
    theme: {
      options: Object.keys(themes),
      mapping: themes,
      control: {
        type: 'select',
        labels: Object.keys(themes),
      },
      defaultValue: themes.defaultTheme,
    },
  };
}

export type ThemedTemplate<T> = ((props: T & { theme?: string }) => JSX.Element) & { args?: Partial<T> };

export function themedTemplateMaker<T>(C: FunctionComponent<T>): ThemedTemplate<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ({ theme, ...args }: any) => {
    const chosenTheme = typeof theme === 'undefined' ? defaultTheme : theme;

    return (
      <ApplicationLayout theme={chosenTheme}>
        <div className={styles.root}>
          <C {...args} />
        </div>
      </ApplicationLayout>
    );
  };
}
