import type { Meta } from '@storybook/react';
import { Label } from '../Label';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';

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
