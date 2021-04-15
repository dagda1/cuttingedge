import { Label, LabelProps } from '.';
import { render } from '@testing-library/react';
import { expect, it, describe } from '@jest/globals';

const wrap = (props: LabelProps = {}) => render(<Label {...props}>label</Label>);

describe('Label', () => {
  it('renders a label', () => {
    const { container } = wrap();

    expect(container.querySelector('label')).toBeTruthy();
  });
});
