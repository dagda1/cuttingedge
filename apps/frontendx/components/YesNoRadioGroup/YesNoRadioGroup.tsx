import type { FormRadioGroupProps } from '@cutting/component-library';
import { FormRadioGroup } from '@cutting/component-library';
import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { Errors, FormValues, StepComponent, YesNoValue } from '../../types';
import * as styles from './YesNoRadioGroup.css';
import 'react-slidedown/lib/slidedown.css';
import 'reactjs-popup/dist/index.css';

import { VideoSlideDown } from '../VideoSlideDown/VideoSlideDown';

type YesNoRadioGroupProps = {
  label: string;
} & Pick<FormRadioGroupProps, 'onChange' | 'onBlur' | 'errorMessage'> &
  StepComponent & {
    value: YesNoValue;
    errors: Errors;
    defaultValue?: YesNoValue;
  } & Pick<UseFormReturn, 'setValue'> & { name: keyof FormValues };

export function YesNoRadioGroup({
  name,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange,
  setValue,
  errors = {},
  errorMessage = 'Required',
  value,
  defaultValue,
  onBlur,
  children,
  label,
  ...rest
}: YesNoRadioGroupProps): JSX.Element {
  const invalid = Object.keys(errors).indexOf(name) > -1;
  const [open, setOpen] = useState<boolean>();

  useEffect(() => {
    if (typeof defaultValue !== 'undefined') {
      setValue(name, defaultValue as YesNoValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className={styles.root}>
      <FormRadioGroup
        label={label}
        legend={label}
        name={name}
        checkableLayout="inline"
        checkableSize={'large'}
        invalid={invalid}
        errorMessage={errorMessage}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(name, e.target.value as YesNoValue);

          if (e.target.value === 'no') {
            setOpen(true);
            return;
          }

          if (e.target.value === 'yes') {
            setOpen(false);
          }
        }}
        onBlur={onBlur}
        {...rest}
        options={[
          {
            content: 'Yes',
            value: 'yes',
            checked: value === 'yes',
          },
          {
            content: 'No',
            value: 'no',
            checked: value === 'no',
          },
        ]}
      />
      <VideoSlideDown open={open}>{children}</VideoSlideDown>
    </div>
  );
}
