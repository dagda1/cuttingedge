import type { ComponentMeta } from '@storybook/react';
import type { ReactNode } from 'react';
import { themedTemplateMaker, themedSelect } from '../../../stories/Stories';
import type {
  CheckableEventHandlers,
  CheckableLayoutProps,
  CheckableProps,
  CheckableValueType,
} from '../../Checkable/types';
import { Radio } from '../Radio';

function SimpleRadio<V extends CheckableValueType>({
  checked: checkedProp,
  ...rest
}: CheckableProps<V> & CheckableEventHandlers & CheckableLayoutProps & { children: ReactNode }): JSX.Element {
  return <Radio {...rest} checked={checkedProp} />;
}

export default {
  title: 'atoms/Radio',
  component: SimpleRadio,
  argTypes: {
    ...themedSelect(),
  },
} as ComponentMeta<typeof SimpleRadio>;

const Template = themedTemplateMaker(SimpleRadio);

export const Simple = Template.bind({});

Simple.args = {
  children: 'Some Value',
  checked: false,
};
