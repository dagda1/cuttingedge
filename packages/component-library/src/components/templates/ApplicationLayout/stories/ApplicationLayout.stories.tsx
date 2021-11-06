import { ComponentStory } from '@storybook/react';
import { consultingTheme } from '../../../../style/themes/consulting/consultingTheme.css';
import { cuttingTheme } from '../../../../style/themes/cutting/cutting.css';
import { defaultTheme } from '../../../../style/themes/default/default.css';
import { ApplicationLayout } from '../ApplicationLayout';

const themes = {
  defaultTheme,
  cuttingTheme,
  consultingTheme,
} as const;

export default {
  title: 'templates/ApplicationLayout',
  component: ApplicationLayout,
  argTypes: {
    theme: {
      options: Object.keys(themes),
      mapping: themes,
      control: {
        type: 'select',
        labels: Object.keys(themes),
      },
      defaultValue: themes.defaultTheme,
    },
    italicise: {
      control: {
        type: 'boolean',
      },
    },
    center: {
      control: {
        type: 'boolean',
      },
    },
    heading: {
      control: {
        type: 'string',
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof ApplicationLayout> = (args: any) => {
  const theme = typeof args.theme === 'undefined' ? defaultTheme : args.theme;

  return (
    <ApplicationLayout className={theme} center>
      {args.children}
    </ApplicationLayout>
  );
};

export const Layout = Template.bind({});

Layout.args = {
  heading: 'heading',
  children: 'Application Layout',
};
