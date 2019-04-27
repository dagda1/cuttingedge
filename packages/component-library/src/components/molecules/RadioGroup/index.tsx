import React, { useState, useRef, useCallback } from 'react';
import { Radio } from '../../atoms/Radio';
import { RadioProps, RadioLayoutProps, RadioSize, RadioLayout } from '../../atoms/Radio/types';
import cs from 'classnames';

const styles = require('./RadioGroup.scss');

export type RadioOption = RadioProps & { content: React.ReactNode };

export interface RadioGroupProps<T = {}> {
  legend: string;
  options: RadioOption[];
  onChange?: (option: RadioProps<T>) => void;
}

export const RadioGroup: React.FunctionComponent<RadioGroupProps & RadioLayoutProps> = ({
  legend,
  layout,
  size,
  options: radioOptions,
  onChange
}) => {
  const optionsWithIds = useRef<RadioOption[]>(
    radioOptions.map((o, index) => ({ ...o, id: o.id || `${o.name}-${index}` }))
  );
  const [selectedValue, setSelectedValue] = useState(optionsWithIds.current.find((o) => !!o.checked));
  const options = optionsWithIds.current;

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const option = optionsWithIds.current.find((o) => o.id === e.target.id);

      if (!option) {
        throw new Error(`could not find option in RadioGroup changeHandler`);
      }

      setSelectedValue(option);

      onChange && onChange(option);
    },
    [onChange]
  );

  return (
    <fieldset
      className={cs(styles.fieldset, {
        [styles.large]: size === RadioSize.large,
        [styles.small]: size === RadioSize.small,
        [styles.stacked]: layout === RadioLayout.stacked,
        [styles.inlihe]: layout === RadioLayout.inline
      })}
    >
      <legend>{legend}</legend>
      <div className={styles.options__container}>
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {options.map(({ id, checked, name, content, ...option }) => {
          return (
            <Radio
              key={id}
              id={id}
              name={name}
              layout={layout}
              size={size}
              checked={selectedValue && id === selectedValue.id}
              onChange={changeHandler}
              {...option}
            >
              {content}
            </Radio>
          );
        })}
      </div>
    </fieldset>
  );
};
