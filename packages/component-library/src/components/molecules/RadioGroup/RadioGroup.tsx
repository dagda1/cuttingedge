import type { CheckableLayoutProps, CheckableValueType } from '../../atoms/Checkable/types';
import { Radio } from 'src/components/atoms/Radio/Radio';
import { CheckableGroup, CheckableGroupProps } from '../CheckableGroup/CheckableGroup';

const RadioGroupComponent = CheckableGroup(Radio);

export function RadioGroup<V extends CheckableValueType>(
  props: CheckableGroupProps<V> & CheckableLayoutProps,
): JSX.Element {
  return <RadioGroupComponent {...props} />;
}
