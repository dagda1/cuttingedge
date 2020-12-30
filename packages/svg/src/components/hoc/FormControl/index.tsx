import cs from 'classnames';
import { FC, ReactNode, InputHTMLAttributes, useRef } from 'react';
import { Error } from '../../atoms/ErrorLabel';
import { Label } from '../../atoms/Label';
import { prefixId } from '../../../utl';

import styles from './FormControl.module.scss';

export type Layout = 'vertical' | 'horizontal';

export type FormControlProps<E> = {
  additionalLabel?: ReactNode;
  className?: string;
  errorDataSelector?: string;
  errorMessage?: string;
  highlight?: boolean;
  invalid?: boolean;
  label: string;
  required?: boolean;
  strong?: boolean;
  layout?: Layout;
  dataSelector?: string;
} & InputHTMLAttributes<E>;

export function FormControl<P, E extends HTMLElement>(Comp: FC<P>): FC<FormControlProps<E> & P> {
  const FormControlWrapper: FC<FormControlProps<E> & P> = ({
    id,
    invalid,
    name,
    label,
    strong,
    errorDataSelector,
    errorMessage,
    className,
    additionalLabel,
    highlight,
    required,
    dataSelector = 'form-control',
    layout = 'vertical',
    ...rest
  }) => {
    const internalId = useRef(id || name || prefixId());

    const errorId = `${internalId.current}-error`;

    return (
      <div
        className={cs(styles.input, className, {
          [styles.highlight]: highlight,
          [styles.horizontal]: layout === 'horizontal',
        })}
      >
        <Label
          id={`${internalId.current}-label`}
          htmlFor={internalId.current}
          required={required}
          strong={strong}
          dataSelector={`${dataSelector}-label`}
        >
          {label}
          {additionalLabel && <span className={styles.label__additional}>{additionalLabel}</span>}
        </Label>
        <div className={styles.wrapper}>
          <Comp
            id={internalId.current}
            name={name}
            invalid={invalid}
            required={required}
            aria-invalid={invalid}
            aria-describedby={errorId}
            {...(rest as P)}
          />
        </div>
        <div id={errorId} aria-hidden={!invalid} role="alert">
          {invalid && errorMessage && (
            <Error dataSelector={errorDataSelector || `${dataSelector}-error`} errorMessage={errorMessage.toString()} />
          )}
        </div>
      </div>
    );
  };

  return FormControlWrapper;
}
