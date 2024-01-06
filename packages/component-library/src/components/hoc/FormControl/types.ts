import type {
  FunctionComponent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import type { vars } from '~/style/themes/vars.css';
import type { FontWeight } from '~/style/types';

export type Layout = 'vertical' | 'horizontal';

export type FormElementAttributes<E> = E extends HTMLInputElement
  ? InputHTMLAttributes<E>
  : E extends HTMLTextAreaElement
    ? TextareaHTMLAttributes<E>
    : E extends HTMLSelectElement
      ? SelectHTMLAttributes<E>
      : HTMLAttributes<E> & { name: string };

export type FormControlProps<E> = {
  additionalLabel?: ReactNode;
  className?: string;
  errorDataSelector?: string;
  errorMessage?: string;
  highlight?: boolean;
  invalid?: boolean;
  label: string;
  required?: boolean;
  fontWeight?: FontWeight;
  layout?: Layout;
  dataSelector?: string;
  width?: keyof typeof vars.inputWidth;
} & FormElementAttributes<E>;

export type FormElement<P> = P extends HTMLAttributes<infer E> ? E : P;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentProps<C extends FunctionComponent<any>> = C extends FunctionComponent<infer P> ? P : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormElementFromComponent<C extends FunctionComponent<any>> = FormElement<ComponentProps<C>>;
