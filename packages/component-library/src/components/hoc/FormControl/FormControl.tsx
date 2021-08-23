import cs from 'classnames';
import { FC, ReactNode, InputHTMLAttributes, useRef } from 'react';
import { Label } from '../../atoms/Label';
import { prefixId } from '../../../utl';
import * as styles from './FormControl.css';
import { FontWeight } from '@cutting/design-system';
import { vars } from '@cutting/design-system/themes/vars.css';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';

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
  fontWeight?: FontWeight;
  layout?: Layout;
  dataSelector?: string;
  width?: keyof typeof vars.inputWidth;
} & InputHTMLAttributes<E>;

export function FormControl<P, E extends HTMLElement>(Comp: FC<P>): FC<FormControlProps<E> & P> {
  const FormControlWrapper: FC<FormControlProps<E> & P> = ({
    id,
    invalid,
    name,
    label,
    errorDataSelector,
    errorMessage,
    className,
    additionalLabel,
    highlight,
    required,
    fontWeight = 'strong',
    dataSelector = 'form-control',
    layout = 'vertical',
    width = 'width100',
    ...rest
  }) => {
    const internalId = useRef(id || name || prefixId());

    const errorId = `${internalId.current}-error`;

    return (
      <div
        className={cs(
          styles.root,
          { [styles.horizontal]: layout === 'horizontal', [styles.error]: invalid, [styles.highlight]: highlight },
          className,
        )}
      >
        <Label
          id={`${internalId.current}-label`}
          htmlFor={internalId.current}
          required={required}
          fontWeight={fontWeight}
          dataSelector={`${dataSelector}-label`}
        >
          {label}
          {additionalLabel && <span className={styles.label__additional}>{additionalLabel}</span>}
        </Label>
        <div id={errorId} aria-hidden={!invalid} role="alert">
          {invalid && errorMessage && (
            <ErrorMessage
              dataSelector={errorDataSelector || `${dataSelector}-error`}
              errorMessage={errorMessage.toString()}
            />
          )}
        </div>
        <div className={styles.wrapper}>
          <Comp
            id={internalId.current}
            name={name}
            invalid={invalid}
            required={required}
            aria-invalid={invalid}
            aria-describedby={errorId}
            className={styles[width]}
            {...(rest as P)}
          />
        </div>
      </div>
    );
  };

  return FormControlWrapper;
}
