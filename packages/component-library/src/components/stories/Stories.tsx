/* eslint-disable react/display-name */
import { defaultTheme } from '../../style/themes/default/default.css';
import { cuttingTheme } from '../../style/themes/cutting/cutting.css';
import { consultingTheme } from '../../style/themes/consulting/consultingTheme.css';
import { salesTheme } from '../../style/themes/sales/salesTheme.css';
import type { StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';
import { ApplicationLayout } from '../templates/ApplicationLayout/ApplicationLayout';
import * as styles from './Stories.css';

const themes = {
  defaultTheme,
  cuttingTheme,
  consultingTheme,
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

export function themedTemplateMaker<T>(C: ComponentType<T>): StoryObj<typeof C> {
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
