import type { ReactNode, ChangeEvent } from 'react';
import { useState, useRef, useCallback } from 'react';
import { Radio } from '../../atoms/Radio/Radio';
import { RadioProps, RadioLayoutProps, RadioValueType } from '../../atoms/Radio/types';
import cs from 'classnames';

import * as styles from '../RadioGroup/RadioGroup.css';

export type CheckableOption<V extends RadioValueType> = RadioProps<V> & { content: ReactNode };

type LegendMode = 'screen-reader-only' | 'visible';

export interface RadioGroupProps<V extends RadioValueType> {
  legend: string;
  legendMode?: LegendMode;
  name: string;
  options: CheckableOption<V>[];
  onChange?: (option: RadioProps<V>) => void;
  className?: string;
}

export function CheckableGroup(Comp: typeof Radio) {
  return function CheckableGroup<V extends RadioValueType>({
    legend,
    legendMode = 'screen-reader-only',
    layout,
    size,
    name,
    options: checkableOptions,
    onChange,
    className,
  }: RadioGroupProps<V> & RadioLayoutProps): JSX.Element {
    const optionsWithIds = useRef<CheckableOption<V>[]>(
      checkableOptions.map((o, index) => ({
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

        console.log(option);
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
        <legend className={cs(styles.legend, { [styles.srOnlyLegend]: legendMode === 'screen-reader-only' })}>
          {legend}
        </legend>
        <div
          className={cs(className, {
            [styles.inline]: layout === 'inline',
          })}
        >
          {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {options.map(({ id, checked, name, content, ...option }) => {
            return (
              <Comp
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
              </Comp>
            );
          })}
        </div>
      </fieldset>
    );
  };
}
