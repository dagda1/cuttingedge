import type { ReactNode, ChangeEvent } from 'react';
import { useState, useRef, useCallback } from 'react';
import { Radio } from '../../atoms/Radio/Radio';
import { CheckableProps, CheckableLayoutProps, CheckableValueType } from '../../atoms/Checkable/types';
import cs from 'classnames';

import * as styles from './Checkable.css';
import { Checkbox } from 'src/components/atoms/Checkbox/Checkbox';

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

export function CheckableGroup(Comp: typeof Radio | typeof Checkbox) {
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
    const [selectedValues, setSelectedValues] = useState(optionsWithIds.current);
    const options = optionsWithIds.current;

    const changeHandler = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const option = optionsWithIds.current.find((o) => o.id === e.target.id);

        if (!option) {
          throw new Error(`could not find option in CheckableGroup changeHandler for ${e.target.id}`);
        }

        if (Comp === Radio) {
          for (const o of selectedValues) {
            o.checked = false;
          }
        }

        option.checked = e.target.checked;

        setSelectedValues([...selectedValues.filter((o) => o.id !== option.id), option]);

        onChange && onChange(option);
      },
      [onChange, selectedValues],
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
                checked={!!selectedValues.find((x) => x.id === id)?.checked}
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
