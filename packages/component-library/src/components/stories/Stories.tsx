import { defaultTheme } from '../../style/themes/default/default.css';
import { cuttingTheme } from '../../style/themes/cutting/cutting.css';
import { consultingTheme } from '../../style/themes/consulting/consultingTheme.css';
import { ComponentStory } from '@storybook/react';
import { ComponentType } from 'react';
import { ApplicationLayout } from '../templates/ApplicationLayout/ApplicationLayout';

const themes = {
  defaultTheme,
  cuttingTheme,
  consultingTheme,
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

export function themedTemplateMaker<T>(C: ComponentType<T>): ComponentStory<typeof C> {
  // eslint-disable-next-line react/display-name
  return (args: any) => {
    const theme = typeof args.theme === 'undefined' ? defaultTheme : args.theme;

    return (
      <ApplicationLayout className={theme} center>
        <div style={{ width: '25%' }}>
          <C {...args} />
        </div>
      </ApplicationLayout>
    );
  };
}
