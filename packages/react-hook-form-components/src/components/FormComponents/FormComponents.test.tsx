import { it, describe } from 'vitest';
import type { FormProps } from './FormComponents';
import { Input } from './FormComponents';
import type { FormInput } from '@cutting/component-library/*';
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

const wrap = (props?: FormProps<typeof FormInput>): RenderResult =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render(<Input value={props?.value} label="label" {...(props as any)} />);

describe('Form Components', () => {
  it('should wrap component with label', () => {
    const { getByText } = wrap();

    getByText('label');
  });
});
