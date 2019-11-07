import cs from 'classnames';
import React, { ReactElement } from 'react';
import isNil from 'lodash/isNil';
import isObject from 'lodash.isobject';

const styles = require('./Select.module.scss');

export interface OptionType {
  [key: string]: string | string[] | number;
}

const isOptionType = (o: number | string | OptionType): o is OptionType => isObject(o);

function mapOptionsToValues(
  element: number | string | OptionType,
  valueKey?: keyof OptionType,
  optionKey?: keyof OptionType,
  index?: number
): ReactElement<HTMLOptionElement> {
  if (isOptionType(element)) {
    if (!valueKey || !optionKey) {
      throw new Error('No valueKey or optionKey supplied for array of objects.');
    }

    const value = element[valueKey];

    return (
      <option value={value} key={`${element[valueKey]}${index}`}>
        {element[optionKey]}
      </option>
    );
  } else {
    return <option key={`${element}${index}`}>{element}</option>;
  }
}

function mergeOptions(
  options: ReactElement<HTMLOptionElement>[],
  dividerAt: number
): ReactElement<HTMLOptionElement>[] {
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
  options: (number | string | OptionType)[];
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
  filterOptions = (): true => true,
  ...rest
}) => {
  return (
    <div className={styles.container}>
      <select value={value} className={cs(className, styles.default, { [styles.invalid]: invalid })} {...rest}>
        {!isNil(defaultLabel) && (
          <option value="" key="">
            {defaultLabel}
          </option>
        )}
        {mergeOptions(
          options.filter(filterOptions).map((x, i: number) => mapOptionsToValues(x, valueKey, optionKey, i)),
          dividerAt || -1
        )}
      </select>
    </div>
  );
};
