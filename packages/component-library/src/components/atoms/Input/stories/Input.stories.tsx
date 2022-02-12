import type { ComponentMeta } from '@storybook/react';
import { Input } from '../Input';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';

export default {
  title: 'atoms/Input',
  component: Input,
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
} as ComponentMeta<typeof Input>;

const Template = themedTemplateMaker(Input);

export const Simple = Template.bind({});

Simple.args = {
  value: '',
};
