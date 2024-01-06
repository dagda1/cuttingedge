import type { ComponentMeta } from '@storybook/react';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';
import type { FormCheckboxGroupProps } from '../../FormControls/FormControls';
import { FormCheckboxGroup } from '../../FormControls/FormControls';

function SimpleCheckboxGroup({ legend, errorMessage, value = 'no', ...rest }: FormCheckboxGroupProps): JSX.Element {
  return (
    <FormCheckboxGroup
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
  title: 'molecules/CheckboxGroup',
  component: SimpleCheckboxGroup,
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
    legend: {
      control: {
        type: 'text',
      },
    },
    legendMode: {
      control: {
        type: 'inline-radio',
        options: ['screen-reader-only', 'visible'],
      },
    },
  },
} as ComponentMeta<typeof SimpleCheckboxGroup>;

const Template = themedTemplateMaker(SimpleCheckboxGroup);

export const Simple = Template.bind({});

Simple.args = {
  legend: 'legend',
};
