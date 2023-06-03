/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FunctionComponent, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';
import { FormInput, FormTextArea } from '@cutting/component-library';
import type { FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form';
import type { FormElementFromComponent, ComponentProps } from '@cutting/component-library';

export type FormProps<C extends FunctionComponent<any>> = ComponentProps<C> & {
  required?: boolean;
  className?: string;
  errors?: unknown;
} & ReturnType<UseFormRegister<FieldValues>> &
  Partial<Pick<UseFormReturn<FieldValues>, 'setValue'>>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createFormComponent<C extends FunctionComponent<any>>(Component: C) {
  return forwardRef<FormElementFromComponent<typeof Component>, ComponentProps<C>>(function ReactHookFormComponent(
    props: FormProps<typeof Component>,
    ref: Ref<FormElementFromComponent<typeof Component>>,
  ) {
    return <Component innerRef={ref} {...(props as any)} />;
  });
}

// TODO: remove annotations.  Currently weird type error
// The inferred type of 'Input' cannot be named without a reference to '@cutting/component-library/node_modules/@types/react'.
// This is likely not portable. A type annotation is necessary.
export const Input: (props: FormProps<typeof FormInput>) => ReactNode = createFormComponent(FormInput);
export const TextArea: (props: FormProps<typeof FormTextArea>) => ReactNode = createFormComponent(FormTextArea);
