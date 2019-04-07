import cs from 'classnames';
import React from 'react';
import { Error } from '../../atoms/ErrorLabel';
import { Label } from '../../atoms/Label';
import { prefixId } from '../../../utl';

const styles = require('./FormControl.scss');

export interface FormControlWrapperProps {
  additionalLabel?: React.ReactNode;
  className?: string;
  doubleLabelMargin?: boolean;
  errorDataSelector?: string;
  errorMessage?: string;
  highlight?: boolean;
  id?: string;
  invalid?: boolean;
  label: string;
  name?: string;
  required?: boolean;
  strong?: boolean;
  width?: number | string;
}

export function FormControl<T>(Comp: React.ComponentType<T>): React.ComponentClass<FormControlWrapperProps & T> {
  return class FormControlWrapper extends React.Component<FormControlWrapperProps & T> {
    id?: string;

    constructor(props: FormControlWrapperProps & T) {
      super(props);

      this.id = this.props.id || this.props.name || prefixId();
    }

    render() {
      const {
        invalid,
        name,
        label,
        strong,
        doubleLabelMargin,
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
        <div
          className={cs('form-group', styles.input, className, highlight && styles.highlight, {
            'double-margin': doubleLabelMargin
          })}
        >
          <Label
            id={`${this.id}-label`}
            htmlFor={this.id}
            required={required}
            strong={strong}
            doubleLabelMargin
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
