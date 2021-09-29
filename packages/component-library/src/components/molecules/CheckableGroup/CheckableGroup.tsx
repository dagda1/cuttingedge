import type { ReactNode, ChangeEvent } from 'react';
import { useState, useRef, useCallback } from 'react';
import { Radio } from '../../atoms/Radio/Radio';
import { CheckableProps, CheckableLayoutProps, CheckableValueType } from '../../atoms/Checkable/types';
import cs from 'classnames';

import * as styles from '../RadioGroup/RadioGroup.css';

export type CheckableOption<V extends CheckableValueType> = CheckableProps<V> & { content: ReactNode };

type LegendMode = 'screen-reader-only' | 'visible';

export interface CheckableGroupProps<V extends CheckableValueType> {
  legend: string;
  legendMode?: LegendMode;
  name: string;
  options: CheckableOption<V>[];
  onChange?: (option: CheckableProps<V>) => void;
  className?: string;
}

export function CheckableGroup(Comp: typeof Radio) {
  return function CheckableGroup<V extends CheckableValueType>({
    legend,
    legendMode = 'screen-reader-only',
    layout,
    size,
    name,
    options: checkableOptions,
    onChange,
    className,
  }: CheckableGroupProps<V> & CheckableLayoutProps): JSX.Element {
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
          throw new Error(`could not find option in CheckableGroup changeHandler`);
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
