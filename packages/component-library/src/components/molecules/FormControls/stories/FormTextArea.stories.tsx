import type { ComponentMeta } from '@storybook/react';
import { FormTextArea } from '../FormControls';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';

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
} as ComponentMeta<typeof FormTextArea>;

const Template = themedTemplateMaker(FormTextArea);

export const Simple = Template.bind({});

Simple.args = {
  label: 'Some label',
  value: '',
};
