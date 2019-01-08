import React from 'react';
import { Input, InputProps } from '../../atoms/Input';
import { Select, SelectProps } from '../../atoms/Select';
import { FormControl, FormControlWrapperProps } from '../../hoc/FormControl';

export type Dummy = React.ComponentType & FormControlWrapperProps;

export const FormInput = FormControl<InputProps>(Input);
export const FormSelect = FormControl<SelectProps>(Select);
