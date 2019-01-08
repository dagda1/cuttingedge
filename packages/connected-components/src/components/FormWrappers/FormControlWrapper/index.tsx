import { FormInput, FormSelect } from '@cutting/component-library';
import React from 'react';
import ReduxForm from 'redux-form';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

export type ControlValue = string | number | Date;

export interface FormControlProps {
  controlOnChange?: React.ChangeEventHandler<any>;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
}

/* eslint react/display-name: "off"*/
export const renderFormControl = (Comp: React.ComponentType<any>): React.StatelessComponent<FormControlProps> => ({
  controlOnChange = (e: React.ChangeEvent<any>) => undefined,
  input: { onChange, value, name },
  meta: { active, error, invalid, submitFailed, touched },
  ...rest
}) => (
  <Comp
    name={name}
    invalid={!active && touched && invalid && submitFailed}
    errorMessage={!active && invalid && error}
    onChange={(e: React.ChangeEvent<any>) => {
      controlOnChange(e);
      onChange(e);
    }}
    value={value}
    {...rest}
  />
);

export const renderFormInput = renderFormControl(FormInput);
export const renderFormSelect = renderFormControl(FormSelect);

// TODO: refactor this into separate components
export type FieldProps = ReduxForm.GenericFieldHTMLAttributes & {
  dataSelector?: string;
  'data-selector'?: string;
  monthYearOnly?: boolean;
  dateFormat?: string;
  controlOnChange?: (...args: any[]) => any;
  label?: string;
  additionalLabel?: React.ReactNode;
  maxLength?: number;
  onKeyDown?: React.KeyboardEventHandler<any>;
  options?: any[];
  legend?: string;
  valueKey?: string | number;
  optionKey?: string | number;
  defaultLabel?: string;
  doubleLabelMargin?: boolean;
  dividerAt?: number;
  errorDataSelector?: string;
  hideLegend?: boolean;
  filterOptions?: (c: any) => boolean;
};

// tslint:disable
export interface IField {
  new (): ReduxForm.Field<FieldProps>;
}

export interface IFieldArray {
  new (): ReduxForm.FieldArray<FieldProps>;
}

export const Field = ReduxForm.Field as IField;
// TODO: do this
export const FieldArray = ReduxForm.FieldArray as any;
