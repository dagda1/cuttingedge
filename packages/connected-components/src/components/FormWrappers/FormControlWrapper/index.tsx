import { FormInput, FormSelect } from '@cutting/component-library';
import React from 'react';
import { FormikHandlers, FieldConfig, FormikState, FormikComputedProps, getIn } from 'formik';
import { getDisplayName } from '@cutting/util';
import { FormControlProps } from '@cutting/component-library';

export type ControlValue = string | number | Date;

export type FormControlWrapperProps<Props, InputType> = FormikHandlers &
  FieldConfig &
  FormikState<Props> &
  FormikComputedProps<Props> &
  FormControlProps<InputType> & {
    controlOnChange?: React.ChangeEventHandler<InputType>;
  };

export function renderFormControl<Props, InputType extends HTMLElement>(
  Comp: React.ComponentType<FormControlProps<InputType>>
): React.FunctionComponent<FormControlProps<InputType>> {
  const Wrapped: React.FunctionComponent<FormControlWrapperProps<Props, InputType>> = ({
    controlOnChange = (e: React.ChangeEvent<InputType>) => e,
    handleChange,
    handleBlur,
    touched,
    values,
    errors,
    submitCount,
    isValid,
    name,
    label
  }) => {
    const error = getIn(errors, name);
    const value = getIn(values, name);
    const isTouched = getIn(touched, name);
    const invalid = !isValid;
    const submitted = submitCount > 0;

    return (
      <Comp
        label={label}
        name={name}
        onBlur={handleBlur}
        invalid={submitted && invalid && isTouched}
        errorMessage={submitted && touched && invalid && error}
        onChange={(e: React.ChangeEvent<InputType>) => {
          controlOnChange(e);
          handleChange(e);
        }}
        value={value}
      />
    );
  };

  Wrapped.displayName = getDisplayName(Wrapped);

  return Wrapped;
}

export const ConnectedFormInput = renderFormControl(FormInput);
export const ConnectedFormSelect = renderFormControl(FormSelect);
