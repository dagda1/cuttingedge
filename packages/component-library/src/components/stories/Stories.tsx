/* eslint-disable react/display-name */
import type { StoryObj } from '@storybook/react';
import type { FunctionComponent } from 'react';

import { cuttingTheme } from '../../style/themes/cutting/cutting.css';
import { defaultTheme } from '../../style/themes/default/default.css';
import { salesTheme } from '../../style/themes/sales/salesTheme.css';
import { ApplicationLayout } from '../templates/ApplicationLayout/ApplicationLayout';
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

export function themedTemplateMaker<T>(C: FunctionComponent<T>): StoryObj<typeof C> {
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
