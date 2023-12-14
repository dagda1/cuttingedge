/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import cs from 'classnames';
import type { FunctionComponent, PropsWithoutRef } from 'react';
import { forwardRef, useRef } from 'react';
import { Label } from '~/components/atoms/Label';
import { prefixId } from '~/utl';
import * as styles from './FormControl.css.js';
import { ErrorMessage } from '~/components/atoms/ErrorMessage/ErrorMessage';
import type { FormControlProps, FormElementFromComponent } from './types';
import { Text } from '~/components/atoms/Text/Text';
import { Stack } from '~/components/molecules/Stack/Stack';

export function FormControl<P>(
  Comp: FunctionComponent<P>,
): (props: PropsWithoutRef<FormControlProps<FormElementFromComponent<typeof Comp>>>) => JSX.Element {
  return forwardRef(
    (
      {
        id,
        invalid,
        name,
        label,
        errorDataSelector,
        errorMessage,
        className,
        additionalLabel,
        highlight,
        required,
        fontWeight = 'strong',
        dataSelector = 'form-control',
        layout = 'vertical',
        width = 'width100',
        ...rest
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ref,
    ) => {
      const internalId = useRef(id || name || prefixId());

      const errorId = `${internalId.current}-error`;

      return (
        <div
          className={cs(
            styles.root,
            { [styles.horizontal]: layout === 'horizontal', [styles.error]: invalid, [styles.highlight]: highlight },
            className,
          )}
        >
          <div id={errorId} aria-hidden={!invalid} role="alert">
            {invalid && errorMessage && (
              <ErrorMessage
                dataSelector={errorDataSelector || `${dataSelector}-error`}
                errorMessage={errorMessage.toString()}
              />
            )}
          </div>
          <Stack space="small">
            <Label
              id={`${internalId.current}-label`}
              htmlFor={internalId.current}
              required={required}
              fontWeight={fontWeight}
              dataSelector={`${dataSelector}-label`}
            >
              {typeof label === 'string' ? (
                <Text layout="inline" component="span" tone="primary">
                  {label}
                </Text>
              ) : (
                label
              )}
              {additionalLabel && <Text className={styles.label__additional}>{additionalLabel}</Text>}
            </Label>
          </Stack>

          <div className={styles.wrapper}>
            <Comp
              id={internalId.current}
              name={name}
              invalid={invalid}
              required={required}
              aria-invalid={invalid}
              aria-describedby={errorId}
              className={styles[width]}
              {...(rest as P)}
            />
          </div>
        </div>
      );
    },
  ) as (props: PropsWithoutRef<FormControlProps<FormElementFromComponent<typeof Comp>>>) => JSX.Element;
}
