import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';
import { FormInput, FormTextArea } from '@cutting/component-library';
import type { FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form';

declare module 'react' {
  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

type Controls = typeof FormInput | typeof FormTextArea;

export type FormProps<C extends Controls, E> = ComponentProps<C> & {
  required?: boolean;
  className?: string;
  errors?: E;
} & ReturnType<UseFormRegister<FieldValues>> &
  Partial<Pick<UseFormReturn<FieldValues>, 'setValue'>>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createFormComponent(Component: Controls) {
  return forwardRef(function ReactHookFormComponent<F extends HTMLElement>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { onChange, onBlur, name, label, className, ...props }: FormProps<typeof Component, any>,
    ref: Ref<F>,
  ): JSX.Element {
    return (
      <Component
        innerRef={ref}
        className={className}
        label={label}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    );
  });
}

export const Input = createFormComponent(FormInput);
export const TextArea = createFormComponent(FormTextArea);
