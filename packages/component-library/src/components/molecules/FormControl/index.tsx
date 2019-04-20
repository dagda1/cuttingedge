import { Input, InputProps } from '../../atoms/Input';
import { Select, SelectProps } from '../../atoms/Select';
import { FormControl } from '../../hoc/FormControl';

export const FormInput = FormControl<InputProps, HTMLInputElement>(Input);
export const FormSelect = FormControl<SelectProps, HTMLSelectElement>(Select);
