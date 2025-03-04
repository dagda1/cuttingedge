import type { ComponentProps, FormElementFromComponent } from '@cutting/component-library';
import { FormInput, FormTextArea } from '@cutting/component-library';
import { forwardRef, type FunctionComponent, type ReactNode } from 'react';
import type { ControllerProps, FieldErrors } from 'react-hook-form';
import { Controller } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormProps<C extends FunctionComponent<any>> = ComponentProps<C> & {
  className?: string;
  errors: FieldErrors;
} & Omit<ControllerProps, 'render' | 'control'> &
  Required<Pick<ControllerProps, 'control'>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createFormComponent<C extends FunctionComponent<any>>(
  Component: C,
): ({ ref, ...props }: FormProps<typeof Component>) => JSX.Element {
  const F = forwardRef<
    FormElementFromComponent<typeof Component>,
    FormProps<typeof Component> & Omit<ControllerProps, 'render'>
  >(({ name, rules, control, errors, ...props }, ref) => {
    const error = errors[name];

    return (
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field }) => (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <Component {...(props as any)} {...field} invalid={!!error} errorMessage={error?.message} ref={ref} />
        )}
      />
    );
  });

  F.displayName = 'FormComponent';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return F;
}

// TODO: remove annotations.  Currently weird type error
// The inferred type of 'Input' cannot be named without a reference to '@cutting/component-library/node_modules/@types/react'.
// This is likely not portable. A type annotation is necessary.
export const Input: (props: FormProps<typeof FormInput>) => ReactNode = createFormComponent(FormInput);
export const TextArea: (props: FormProps<typeof FormTextArea>) => ReactNode = createFormComponent(FormTextArea);
