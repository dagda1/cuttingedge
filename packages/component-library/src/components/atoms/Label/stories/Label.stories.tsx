import type { Meta } from '@storybook/react-vite';

import { themedSelect, themedTemplateMaker } from '~storybook/Stories';

import { Label } from '../Label';

export default {
  title: 'atoms/Label',
  component: Label,
  argTypes: {
    ...themedSelect(),
    invalid: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<typeof Label>;

const Template = themedTemplateMaker(Label);

export const Simple = Template.bind({});

Simple.args = {
  children: 'Label',
};
