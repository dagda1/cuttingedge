import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';
import { FormInput, FormTextArea } from '@cutting/component-library';
import type { UseFormRegister, UseFormReturn } from 'react-hook-form';
import { YesNoRadioGroup } from '../YesNoRadioGroup/YesNoRadioGroup';
import type { Errors } from '../../types';

declare module 'react' {
  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

type Controls = typeof FormInput | typeof FormTextArea | typeof YesNoRadioGroup;

export type FormProps<C extends Controls> = ComponentProps<C> & {
  required?: boolean;
  className?: string;
  errors?: Errors;
  // TODO: remove any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & ReturnType<UseFormRegister<any>> &
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Partial<Pick<UseFormReturn<any>, 'setValue'>>;

function createFormComponent(Component: Controls) {
  return forwardRef(function ReactHookFormComponent<F extends HTMLElement>(
    { onChange, onBlur, name, label, className, ...props }: FormProps<typeof Component>,
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
export const YesNo = createFormComponent(YesNoRadioGroup);
