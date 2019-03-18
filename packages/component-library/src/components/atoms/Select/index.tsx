import cs from 'classnames';
import React from 'react';
import { isNil, identity } from '@cutting/util';

const styles = require('./select.scss');

function mapOptionsToValues<T extends { [key: string]: any }, K extends keyof T>(
  element: T,
  valueKey?: K,
  optionKey?: K,
  index?: number
) {
  if (isNil(valueKey) || isNil(optionKey)) {
    return <option key={`${element}${index}`}>{element}</option>;
  } else {
    return (
      <option value={element[valueKey]} key={`${element[valueKey]}${index}`}>
        {element[optionKey]}
      </option>
    );
  }
}

function mergeOptions(options: object[], dividerAt: number) {
  if (dividerAt > -1) {
    const divider = (
      <option key="divider" disabled>
        ──────────
      </option>
    );

    options.splice(dividerAt, 0, divider);
  }

  return options;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  defaultLabel?: string;
  options: any[];
  invalid?: boolean;
  valueKey?: string;
  optionKey?: string;
  dividerAt?: number;
  filterOptions?: (option: any) => boolean;
  legend?: string;
}

export const Select: React.StatelessComponent<SelectProps> = ({
  value,
  defaultLabel,
  className,
  options = [],
  invalid,
  valueKey,
  optionKey,
  dividerAt,
  filterOptions,
  legend,
  ...rest
}) => (
  <div className={styles.container}>
    <select value={value} className={cs(className, styles.default, { [styles.invalid]: invalid })} {...rest}>
      {!isNil(defaultLabel) && (
        <option value="" key="">
          {defaultLabel}
        </option>
      )}
      {filterOptions &&
        mergeOptions(
          options.filter(filterOptions).map((x, i: number) => mapOptionsToValues(x, valueKey, optionKey, i)),
          dividerAt || -1
        )}
    </select>
  </div>
);

Select.defaultProps = {
  defaultLabel: '',
  filterOptions: identity
};
