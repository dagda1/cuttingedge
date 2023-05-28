import type { ComponentProps, FunctionComponent, InputHTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';
import { FormInput, FormTextArea } from '@cutting/component-library';
import type { FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form';

declare module 'react' {
  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

type Controls = typeof FormInput | typeof FormTextArea;

type InputElement<C extends Controls> = C extends FunctionComponent<infer P>
  ? P extends InputHTMLAttributes<infer E>
    ? E
    : never
  : never;

export type FormProps<C extends Controls> = ComponentProps<C> & {
  required?: boolean;
  className?: string;
  errors?: unknown;
} & ReturnType<UseFormRegister<FieldValues>> &
  Partial<Pick<UseFormReturn<FieldValues>, 'setValue'>>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createFormComponent<C extends FunctionComponent<any>>(Component: C) {
  return forwardRef(function ReactHookFormComponent(
    { onChange, onBlur, name, label, className, ...props }: FormProps<typeof Component>,
    ref: Ref<InputElement<typeof Component>>,
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
