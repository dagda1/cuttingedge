import type { ComponentMeta } from '@storybook/react';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';
import type { FormRadioGroupProps } from '../../FormControls/FormControls';
import { FormRadioGroup } from '../../FormControls/FormControls';

function SimpleRadioGroup({ legend, errorMessage, value = 'no', ...rest }: FormRadioGroupProps): JSX.Element {
  return (
    <FormRadioGroup
      legend={legend}
      errorMessage={errorMessage}
      {...rest}
      options={[
        {
          content: 'Yes',
          value: 'yes',
          checked: value === 'yes',
        },
        {
          content: 'No',
          value: 'no',
          checked: value === 'no',
        },
      ]}
    />
  );
}

export default {
  title: 'molecules/RadioGroup',
  component: SimpleRadioGroup,
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
} as ComponentMeta<typeof SimpleRadioGroup>;

const Template = themedTemplateMaker(SimpleRadioGroup);

export const Simple = Template.bind({});

Simple.args = {
  legend: 'legend',
};
