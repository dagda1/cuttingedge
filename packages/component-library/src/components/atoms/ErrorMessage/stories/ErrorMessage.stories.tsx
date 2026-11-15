import type { Meta } from '@storybook/react-vite';

import { themedSelect, themedTemplateMaker } from '~storybook/Stories';

import { ErrorMessage as Label } from '../ErrorMessage';

export default {
  title: 'atoms/ErrorMessage',
  component: Label,
  argTypes: {
    ...themedSelect(),
  },
} as Meta<typeof Label>;

const Template = themedTemplateMaker(Label);

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
  errorMessage: 'error message',
};
