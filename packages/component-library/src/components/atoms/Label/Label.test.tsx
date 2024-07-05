import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { LabelProps } from './Label';
import { Label } from './Label';

const wrap = (props: LabelProps = {}) => render(<Label {...props}>label</Label>);

describe('Label', () => {
  it('renders a label', () => {
    const { container } = wrap();

    expect(container.querySelector('label')).toBeTruthy();
  });
});
