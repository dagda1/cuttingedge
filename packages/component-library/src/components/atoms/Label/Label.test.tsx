import type { LabelProps } from './Label';
import { Label } from './Label';
import { render } from '@testing-library/react';
import { expect, it, describe } from 'vitest';

const wrap = (props: LabelProps = {}) => render(<Label {...props}>label</Label>);

describe('Label', () => {
  it('renders a label', () => {
    const { container } = wrap();

    expect(container.querySelector('label')).toBeTruthy();
  });
});
