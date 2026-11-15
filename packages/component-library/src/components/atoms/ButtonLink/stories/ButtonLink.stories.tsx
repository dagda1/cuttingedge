import type { Meta } from '@storybook/react-vite';

import { themedSelect, themedTemplateMaker } from '~storybook/Stories';

import { ButtonLink } from '../ButtonLink';

export default {
  title: 'atoms/ButtonLink',
  component: ButtonLink,
  argTypes: {
    ...themedSelect(),
    href: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof ButtonLink>;

const Template = themedTemplateMaker(ButtonLink);

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
