import cs from 'classnames';
import type { ReactElement } from 'react';
import { Error } from '../../atoms/ErrorLabel';
import { Label } from '../../atoms/Label';
import { prefixId } from '../../../utl';

import styles from './FormControl.module.scss';

export enum LayoutType {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export type FormControlProps<E> = {
  additionalLabel?: React.ReactNode;
  className?: string;
  errorDataSelector?: string;
  errorMessage?: string;
  highlight?: boolean;
  invalid?: boolean;
  label: string;
  required?: boolean;
  strong?: boolean;
  layoutType?: LayoutType;
  ['data-selector']?: string;
} & React.InputHTMLAttributes<E>;

export function FormControl<P, E extends HTMLElement>(
  Comp: React.ComponentType<P>,
): React.ComponentClass<FormControlProps<E> & P> {
  return class FormControlWrapper extends React.Component<FormControlProps<E> & P> {
    id?: string;

    constructor(props: FormControlProps<E> & P) {
      super(props);

      this.id = this.props.id || this.props.name || prefixId();
    }

    render(): ReactElement {
      const {
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
        layoutType = LayoutType.vertical,
        ...rest
      } = this.props;

      const errorId = `${this.id}-error`;

      return (
        <div
          className={cs(styles.input, className, {
            [styles.highlight]: highlight,
            [styles.horizontal]: layoutType === LayoutType.horizontal,
          })}
        >
          <Label
            id={`${this.id}-label`}
            htmlFor={this.id}
            required={required}
            strong={strong}
            dataSelector={rest['data-selector'] && `${rest['data-selector']}-label`}
          >
            {label}
            {additionalLabel && <span className={styles.label__additional}>{additionalLabel}</span>}
          </Label>
          <div className={styles.wrapper}>
            <Comp
              id={this.id}
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
              <Error
                dataSelector={(rest['data-selector'] && `${rest['data-selector']}-error`) || errorDataSelector}
                errorMessage={errorMessage.toString()}
              />
            )}
          </div>
        </div>
      );
    }
  };
}
