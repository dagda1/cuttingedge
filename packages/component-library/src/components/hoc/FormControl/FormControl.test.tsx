import { expect, it, describe } from 'vitest';
import { Input } from '../../atoms/Input/Input.js';
import { FormControl } from './FormControl.js';
import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { FormControlProps, FormElementFromComponent } from './types.js';
import type { TypeOf } from 'ts-expect';
import { expectType } from 'ts-expect';
import { TextArea } from '~/components/atoms/TextArea/TextArea.js';
import type { HTMLAttributes } from 'react';

const FormInput = FormControl(Input);

const wrap = (props?: Partial<FormControlProps<HTMLInputElement>>): RenderResult =>
  render(<FormInput value={props?.value} label="label" {...props} />);

describe('FormControl', () => {
  describe('types', () => {
    it('should type input element', () => {
      const input = FormControl(Input);
      type I = FormElementFromComponent<typeof input>;

      expectType<TypeOf<HTMLInputElement, I>>(true);

      const textarea = FormControl(TextArea);
      type T = FormElementFromComponent<typeof textarea>;

      expectType<TypeOf<HTMLTextAreaElement, T>>(true);

      const Div = (props: HTMLAttributes<HTMLDivElement>) => <div {...props}>Hello</div>;

      const div = FormControl(Div);

      type D = FormElementFromComponent<typeof div>;

      expectType<TypeOf<HTMLDivElement, D>>(true);
    });
  });

  it('should wrap component with label', () => {
    const { getByText } = wrap();

    getByText('label');
  });

  it('should render an error state', () => {
    const { getByTestId } = wrap({ invalid: true, errorMessage: 'error' });

    getByTestId('form-control-error');
  });

  it('should be able to tag an error label', () => {
    const { getByTestId, getByText } = wrap({
      invalid: true,
      errorDataSelector: 'error-selector',
      errorMessage: 'Error',
    });

    getByTestId('error-selector');

    getByText('Error');
  });

  it('should add aria tags for invalid', () => {
    const { container } = wrap({ invalid: true });

    expect(container.querySelector('[aria-invalid=true]')).toBeTruthy();
  });

  it('should add additional markup to FormControl', () => {
    const { getByText } = wrap({ additionalLabel: <em>additional</em> });

    getByText('additional');
  });
});
