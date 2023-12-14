/* eslint-disable react/display-name */
import { defaultTheme } from '../../style/themes/default/default.css.js';
import { cuttingTheme } from '../../style/themes/cutting/cutting.css.js';
import { salesTheme } from '../../style/themes/sales/salesTheme.css.js';
import type { StoryObj } from '@storybook/react';
import type { FunctionComponent } from 'react';
import { ApplicationLayout } from '../templates/ApplicationLayout/ApplicationLayout.js';
import * as styles from './Stories.css.js';

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
