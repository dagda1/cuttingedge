import type { Meta } from '@storybook/react';
import type { ReactNode } from 'react';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';
import type {
  CheckableEventHandlers,
  CheckableLayoutProps,
  CheckableProps,
  CheckableValueType,
} from '../../Checkable/types';
import { Checkbox } from '../Checkbox';

function SimpleCheckBox<V extends CheckableValueType>({
  checked: checkedProp,
  ...rest
}: CheckableProps<V> & CheckableEventHandlers & CheckableLayoutProps & { children: ReactNode }): JSX.Element {
  return <Checkbox {...rest} checked={checkedProp} />;
}

export default {
  title: 'atoms/Checkbox',
  component: SimpleCheckBox,
  argTypes: {
    ...themedSelect(),
  },
} as Meta<typeof SimpleCheckBox>;

const Template = themedTemplateMaker(SimpleCheckBox);

export const Simple = Template.bind({});

Simple.args = {
  children: 'Some Value',
  checked: false,
};
