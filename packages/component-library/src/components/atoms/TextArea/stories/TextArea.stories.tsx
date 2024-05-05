import type { Meta } from '@storybook/react';
import { TextArea } from '../TextArea';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';

export default {
  title: 'atoms/TextArea',
  component: TextArea,
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
    rows: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof TextArea>;

const Template = themedTemplateMaker(TextArea);

export const Simple = Template.bind({});

Simple.args = {
  value: '',
};
