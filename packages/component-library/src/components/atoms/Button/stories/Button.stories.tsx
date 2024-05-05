import type { Meta } from '@storybook/react';
import { themedSelect, themedTemplateMaker } from '../../../stories/Stories';
import { Button } from '../Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    ...themedSelect(),
  },
} as Meta<typeof Button>;

const Template = themedTemplateMaker(Button);

export const Primary = Template.bind({});

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
