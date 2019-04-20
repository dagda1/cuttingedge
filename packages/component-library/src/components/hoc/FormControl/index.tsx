import cs from 'classnames';
import React from 'react';
import { Error } from '../../atoms/ErrorLabel';
import { Label } from '../../atoms/Label';
import { prefixId } from '../../../utl';

const styles = require('./FormControl.scss');

export type GenericFieldHTMLAttributes<InputType> = React.InputHTMLAttributes<InputType>;

export type FormControlProps<InputType> = {
  additionalLabel?: React.ReactNode;
  className?: string;
  errorDataSelector?: string;
  errorMessage?: string;
  highlight?: boolean;
  invalid?: boolean;
  label: string;
  required?: boolean;
  strong?: boolean;
} & GenericFieldHTMLAttributes<InputType>;

export function FormControl<T, InputType>(
  Comp: React.ComponentType<T>
): React.ComponentClass<FormControlProps<InputType> & T> {
  return class FormControlWrapper extends React.Component<FormControlProps<InputType> & T> {
    id?: string;

    constructor(props: FormControlProps<InputType> & T) {
      super(props);

      this.id = this.props.id || this.props.name || prefixId();
    }

    render() {
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
        ...rest
      } = this.props;

      const errorId = `${this.id}-error`;

      return (
        <div className={cs('form-group', styles.input, className, highlight && styles.highlight)}>
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
              aria-invalid={invalid}
              required={required}
              aria-describedby={errorId}
              {...rest as T}
            />
          </div>
          <div id={errorId} className="form-group" aria-hidden={!invalid} role="alert">
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
