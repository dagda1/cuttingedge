import type { FormInput } from '@cutting/component-library';
import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { describe, it } from 'vitest';

import type { FormProps } from './FormComponents';
import { Input } from './FormComponents';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Form(props: any) {
  const form = useRef<HTMLFormElement>(null);
  const {
    control,
    formState: { errors },
  } = useForm({ defaultValues: { test: '' } });

  return (
    <form ref={form} noValidate>
      eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Input name="test" value={props?.value} label="label" {...props} errors={errors} control={control} />
    </form>
  );
}

const wrap = (props?: FormProps<typeof FormInput>): RenderResult => {
  return render(<Form {...props} />);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any

describe('Form Components', () => {
  it('should wrap component with label', () => {
    const { getByText } = wrap();

    getByText('label');
  });
});
