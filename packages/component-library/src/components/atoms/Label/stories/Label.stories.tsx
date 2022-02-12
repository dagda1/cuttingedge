import type { ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof Label>;

const Template = themedTemplateMaker(Label);

export const Simple = Template.bind({});

Simple.args = {
  children: 'Label',
};
