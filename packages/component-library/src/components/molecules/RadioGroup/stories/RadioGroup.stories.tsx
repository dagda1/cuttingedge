import { ComponentMeta } from '@storybook/react';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';
import { FormRadioGroup, FormRadioGroupProps } from '../../FormControls/FormControls';

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
  },
} as ComponentMeta<typeof SimpleRadioGroup>;

const Template = themedTemplateMaker(SimpleRadioGroup);

export const Simple = Template.bind({});

Simple.args = {
  legend: 'legend',
};
