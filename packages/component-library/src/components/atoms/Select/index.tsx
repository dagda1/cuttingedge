import React from 'react';
import isNil from 'lodash/isNil';
import isObject from 'lodash.isobject';
import cs from 'classnames';

const styles = require('./select.scss');

export interface OptionType {
  [key: string]: string | string[] | number;
}

function mapOptionsToValues(
  element: OptionType,
  valueKey?: keyof OptionType,
  optionKey?: keyof OptionType,
  index?: number
) {
  if (isNil(valueKey) || isNil(optionKey)) {
    return <option key={`${element}${index}`}>{element}</option>;
  } else {
    const value = element[valueKey];

    return (
      <option value={value} key={`${element[valueKey]}${index}`}>
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

const isArrayOfStringsOrNumbers = (arr: unknown[]): arr is string[] | number[] => {
  if (arr.length === 0) {
    return true;
  }

  return arr.every((a) => (!isObject(a) && typeof a === 'number') || typeof a === 'string');
};

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  defaultLabel?: string;
  options: string[] | OptionType[];
  invalid?: boolean;
  valueKey?: keyof OptionType;
  optionKey?: keyof OptionType;
  dividerAt?: number;
  filterOptions?: (option: OptionType) => boolean;
}

export const Select: React.FC<SelectProps> = ({
  value,
  defaultLabel = '',
  className,
  options,
  invalid,
  valueKey,
  optionKey,
  dividerAt,
  filterOptions = () => true,
  ...rest
}) => {
  const resolvedOptions = isArrayOfStringsOrNumbers(options) ? options.map((x) => ({ key: x, value: x })) : options;

  return (
    <div className={styles.container}>
      <select value={value} className={cs(className, styles.default, { [styles.invalid]: invalid })} {...rest}>
        {!isNil(defaultLabel) && (
          <option value="" key="">
            {defaultLabel}
          </option>
        )}
        {filterOptions &&
          mergeOptions(
            resolvedOptions.filter(filterOptions).map((x, i: number) => mapOptionsToValues(x, valueKey, optionKey, i)),
            dividerAt || -1
          )}
      </select>
    </div>
  );
};
