import cs from 'classnames';
import type { FunctionComponent } from 'react';
import { useRef } from 'react';
import { Label } from '~/components/atoms/Label';
import { prefixId } from '~/utl';
import * as styles from './FormControl.css';
import { ErrorMessage } from '~/components/atoms/ErrorMessage/ErrorMessage';
import type { FormControlProps, FormElementFromComponent } from './types';
import { Text } from '~/components/atoms/Text/Text';
import { Stack } from '~/components/molecules/Stack/Stack';

export function FormControl<P>(
  Comp: FunctionComponent<P>,
): FunctionComponent<FormControlProps<FormElementFromComponent<typeof Comp>> & P> {
  function FormControlWrapper({
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
  }: FormControlProps<FormElementFromComponent<typeof Comp>> & P): JSX.Element {
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
              <Text layout="inline" component="span">
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
  }

  return FormControlWrapper;
}
