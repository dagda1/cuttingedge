import { FormInput, FormSelect, OptionType } from '@cutting/component-library';
import React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps, GenericFieldHTMLAttributes } from 'redux-form';
import { getDisplayName } from '@cutting/util/src/react/components';

export type ControlValue = string | number | Date;

export interface FormControlProps {
  controlOnChange?: React.ChangeEventHandler<HTMLElement>;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
}

export function renderFormControl<T>(Comp: React.ComponentType): React.FunctionComponent<FormControlProps & T> {
  const Wrapped: React.FunctionComponent<FormControlProps & T> = ({
    controlOnChange = () => undefined,
    input: { onChange, value, name },
    meta: { active, error, invalid, submitFailed, touched },
    ...rest
  }) => (
    <Comp
      name={name}
      invalid={!active && touched && invalid && submitFailed}
      errorMessage={!active && invalid && error}
      onChange={(e: React.ChangeEvent<HTMLElement>) => {
        controlOnChange(e);
        onChange(e);
      }}
      value={value}
      {...rest}
    />
  );

  Wrapped.displayName = getDisplayName(Wrapped);

  return Wrapped;
}

export const renderFormInput = renderFormControl(FormInput);
export const renderFormSelect = renderFormControl(FormSelect);

export type FieldProps = GenericFieldHTMLAttributes & {
  dataSelector?: string;
  'data-selector'?: string;
  monthYearOnly?: boolean;
  dateFormat?: string;
  // eslint-disable-next-line
  controlOnChange?: (...args: any[]) => any;
  label?: string;
  additionalLabel?: React.ReactNode;
  maxLength?: number;
  onKeyDown?: React.KeyboardEventHandler;
  options?: OptionType[];
  legend?: string;
  valueKey?: string | number;
  optionKey?: string | number;
  defaultLabel?: string;
  doubleLabelMargin?: boolean;
  dividerAt?: number;
  errorDataSelector?: string;
  hideLegend?: boolean;
  filterOptions?: (c: OptionType) => boolean;
};
