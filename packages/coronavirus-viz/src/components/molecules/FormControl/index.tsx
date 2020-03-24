import { Input, InputProps } from '../../atoms/Input';
import { FormControl } from '../../hoc/FormControl';

export const FormInput = FormControl<InputProps, HTMLInputElement>(Input);
