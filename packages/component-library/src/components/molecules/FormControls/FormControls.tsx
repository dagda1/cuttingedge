import { TextArea } from '../../atoms/TextArea/TextArea.js';
import { Input } from '../../atoms/Input/Input.js';
import { FormControl } from '../../hoc/FormControl/FormControl.js';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup.js';
import { RadioGroup } from '../RadioGroup/RadioGroup.js';
import type { ComponentProps } from '../../hoc/FormControl/types.js';

export const FormInput = FormControl(Input);
export const FormTextArea = FormControl(TextArea);
export const FormRadioGroup = FormControl(RadioGroup);
export const FormCheckboxGroup = FormControl(CheckboxGroup);

export type FormInputProps = ComponentProps<typeof FormInput>;
export type FormTextAreaProps = ComponentProps<typeof FormTextArea>;
export type FormRadioGroupProps = ComponentProps<typeof FormRadioGroup>;
export type FormCheckboxGroupProps = ComponentProps<typeof FormCheckboxGroup>;
