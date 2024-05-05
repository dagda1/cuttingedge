import type { StoryFn } from '@storybook/react';
import { ApplicationLayout, themes } from '../ApplicationLayout';
import { atoms } from '~/style/atoms/atoms';

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
    center: {
      control: {
        type: 'boolean',
      },
    },
    heading: {
      control: {
        type: 'text',
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<typeof ApplicationLayout> = ({ theme, children, ...rest }: any) => {
  return (
    <ApplicationLayout theme={theme} className={atoms({ padding: 'xsmall' })} {...rest}>
      {children}
    </ApplicationLayout>
  );
};

export const Layout = Template.bind({});

Layout.args = {
  heading: 'heading',
  children: 'Application Layout',
};
