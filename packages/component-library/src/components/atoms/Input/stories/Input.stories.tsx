import type { Meta } from '@storybook/react-vite';

import { themedSelect, themedTemplateMaker } from '../../../../../.storybook/Stories';
import { Input } from '../Input';

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
} as Meta<typeof Input>;

const Template = themedTemplateMaker(Input);

export const Simple = Template.bind({});

Simple.args = {
  value: '',
};
