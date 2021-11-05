import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ApplicationLayout } from '../../templates/ApplicationLayout/ApplicationLayout';
import { defaultTheme } from '../../../style/themes/default/default.css';
import { salesTheme } from '../../../style/themes/sales/salesTheme.css';
import { consultingTheme } from '../../../style/themes/consulting/consultingTheme.css';
import { Button } from './Button';

const themes = {
  defaultTheme,
  salesTheme,
  consultingTheme,
} as const;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    theme: {
      options: Object.keys(themes),
      mapping: themes,
      control: {
        type: 'select',
        labels: Object.keys(themes),
      },
      table: {
        defaultValue: { summary: themes.defaultTheme },
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof Button> = (args: any) => {
  const theme =
    typeof args.theme === 'undefined' ? defaultTheme : typeof args.theme === 'string' ? args.theme : themes[args.theme];

  console.log(theme);
  return (
    <ApplicationLayout className={theme}>
      <div style={{ width: '25%' }}>
        <Button {...args} />
      </div>
    </ApplicationLayout>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  buttonStyle: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  buttonStyle: 'secondary',
  children: 'Secondary',
};

export const Warning = Template.bind({});

Warning.args = {
  buttonStyle: 'warning',
  children: 'Warning',
};
