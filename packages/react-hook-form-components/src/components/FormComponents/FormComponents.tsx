/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FunctionComponent, ReactNode } from 'react';
import { FormInput, FormTextArea } from '@cutting/component-library';
import type { ControllerProps, FieldErrors } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { ComponentProps } from '@cutting/component-library';

export type FormProps<C extends FunctionComponent<any>> = ComponentProps<C> & {
  className?: string;
  errors: FieldErrors;
} & Omit<ControllerProps, 'render'>;

export function createFormComponent<C extends FunctionComponent<any>>(
  Component: C,
): (props: FormProps<typeof Component> & Omit<ControllerProps, 'render'>) => JSX.Element {
  return function ReactHookFormComponent({
    name,
    rules,
    control,
    errors,
    ...props
  }: FormProps<typeof Component> & Omit<ControllerProps, 'render'>): JSX.Element {
    const error = errors[name];

    return (
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field }) => (
          <Component {...(props as any)} {...field} invalid={!!error} errorMessage={error?.message} />
        )}
      />
    );
  };
}

// TODO: remove annotations.  Currently weird type error
// The inferred type of 'Input' cannot be named without a reference to '@cutting/component-library/node_modules/@types/react'.
// This is likely not portable. A type annotation is necessary.
export const Input: (props: FormProps<typeof FormInput>) => ReactNode = createFormComponent(FormInput);
export const TextArea: (props: FormProps<typeof FormTextArea>) => ReactNode = createFormComponent(FormTextArea);
