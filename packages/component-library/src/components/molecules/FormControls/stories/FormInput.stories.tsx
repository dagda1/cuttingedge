import type { Meta } from '@storybook/react';

import { themedSelect, themedTemplateMaker } from '../../../stories/Stories';
import { FormInput } from '../FormControls';

export default {
  title: 'molecules/FormInput',
  component: FormInput,
  argTypes: {
    ...themedSelect(),
    invalid: {
      control: {
        type: 'boolean',
      },
    },
    highlight: {
      control: {
        type: 'boolean',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof FormInput>;

const Template = themedTemplateMaker(FormInput);

export const Simple = Template.bind({});

Simple.args = {
  label: 'Some label',
  value: '',
};
