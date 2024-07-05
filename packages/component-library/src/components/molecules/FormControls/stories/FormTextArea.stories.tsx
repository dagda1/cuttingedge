import type { Meta } from '@storybook/react';

import { themedSelect, themedTemplateMaker } from '../../../stories/Stories';
import { FormTextArea } from '../FormControls';

export default {
  title: 'molecules/FormTextArea',
  component: FormTextArea,
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
} as Meta<typeof FormTextArea>;

const Template = themedTemplateMaker(FormTextArea);

export const Simple = Template.bind({});

Simple.args = {
  label: 'Some label',
  value: '',
};
