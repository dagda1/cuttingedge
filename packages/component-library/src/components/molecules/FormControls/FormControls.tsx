import { TextArea } from '../../atoms/TextArea/TextArea';
import { Input } from '../../atoms/Input/Input';
import { FormControl } from '../../hoc/FormControl/FormControl';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import type { ComponentProps } from '../../hoc/FormControl/types';

export const FormInput = FormControl(Input);
export const FormTextArea = FormControl(TextArea);
export const FormRadioGroup = FormControl(RadioGroup);
export const FormCheckboxGroup = FormControl(CheckboxGroup);

export type FormInputProps = ComponentProps<typeof FormInput>;
export type FormTextAreaProps = ComponentProps<typeof FormTextArea>;
export type FormRadioGroupProps = ComponentProps<typeof FormRadioGroup>;
export type FormCheckboxGroupProps = ComponentProps<typeof FormCheckboxGroup>;
