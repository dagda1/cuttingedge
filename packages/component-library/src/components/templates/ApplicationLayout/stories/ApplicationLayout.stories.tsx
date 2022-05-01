import type { ComponentStory } from '@storybook/react';
import { consultingTheme } from '../../../../style/themes/consulting/consultingTheme.css';
import { cuttingTheme } from '../../../../style/themes/cutting/cutting.css';
import { salesTheme } from '../../../../style/themes/sales/salesTheme.css';
import { defaultTheme } from '../../../../style/themes/default/default.css';
import { ApplicationLayout } from '../ApplicationLayout';
import cs from 'classnames';
import { atoms } from '../../../../style/atoms/atoms';

const themes = {
  defaultTheme,
  cuttingTheme,
  consultingTheme,
  salesTheme,
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
const Template: ComponentStory<typeof ApplicationLayout> = ({ theme, children, ...rest }: any) => {
  const themed = typeof theme === 'undefined' ? defaultTheme : theme;

  return (
    <ApplicationLayout className={cs(themed, atoms({ padding: '3x' }))} {...rest}>
      {children}
    </ApplicationLayout>
  );
};

export const Layout = Template.bind({});

Layout.args = {
  heading: 'heading',
  children: 'Application Layout',
};
