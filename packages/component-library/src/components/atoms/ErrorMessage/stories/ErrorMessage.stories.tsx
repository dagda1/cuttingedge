import type { Meta } from '@storybook/react';

import { themedSelect, themedTemplateMaker } from '../../../stories/Stories';
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
