import { it, describe } from 'vitest';
import type { FormProps } from './FormComponents';
import { Input } from './FormComponents';
import type { FormInput } from '@cutting/component-library';
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import { useRef } from 'react';

function Form(props: FormProps<typeof FormInput>) {
  const form = useRef<HTMLFormElement>(null);
  const {
    control,
    formState: { errors },
  } = useForm({ defaultValues: { test: '' } });

  return (
    <form ref={form} noValidate>
      <Input name="test" value={props?.value} label="label" {...(props as any)} errors={errors} control={control} />
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
