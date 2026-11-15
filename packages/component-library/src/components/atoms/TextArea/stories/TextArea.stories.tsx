import type { Meta } from '@storybook/react-vite';

import { themedSelect, themedTemplateMaker } from '../../../../../.storybook/Stories';
import { TextArea } from '../TextArea';

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
