import type { ReactNode, FC, ChangeEvent } from 'react';
import { useState, useRef, useCallback } from 'react';
import { Radio } from '../../atoms/Radio/Radio';
import { RadioProps, RadioLayoutProps } from '../../atoms/Radio/types';
import cs from 'classnames';

import * as styles from './RadioGroup.css';

export type RadioOption = RadioProps & { content: ReactNode };

// eslint-disable-next-line @typescript-eslint/ban-types
export interface RadioGroupProps<T = {}> {
  legend: string;
  name: string;
  options: (Omit<RadioOption, 'name' | 'id'> & Partial<Pick<RadioOption, 'id'>>)[];
  onChange?: (option: RadioProps<T>) => void;
  className?: string;
}

export const RadioGroup: FC<RadioGroupProps & RadioLayoutProps> = ({
  legend,
  layout,
  size,
  name,
  options: radioOptions,
  onChange,
  className,
}) => {
  const optionsWithIds = useRef<RadioOption[]>(
    radioOptions.map((o, index) => ({
      ...o,
      name,
      id: o.id || `${name}-${index}`,
    })),
  );
  const [selectedValue, setSelectedValue] = useState(optionsWithIds.current.find((o) => !!o.checked));
  const options = optionsWithIds.current;

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const option = optionsWithIds.current.find((o) => o.id === e.target.id);

      if (!option) {
        throw new Error(`could not find option in RadioGroup changeHandler`);
      }

      setSelectedValue(option);

      onChange && onChange(option);
    },
    [onChange],
  );

  return (
    <fieldset className={styles.fieldset}>
      <legend>{legend}</legend>
      <div
        className={cs(className, {
          [styles.inline]: layout === 'inline',
        })}
      >
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
