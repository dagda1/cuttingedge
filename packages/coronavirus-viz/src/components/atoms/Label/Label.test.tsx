import React from 'react';
import { Label, LabelProps } from '.';
import { render } from '@cutting/devtools/jest/react-testing-overrides';

const wrap = (props: LabelProps = {}) => render(<Label {...props}>label</Label>);

describe('Label', () => {
  it('renders a label', () => {
    const { container } = wrap();

    expect(container.querySelector('label')).toBeTruthy();
  });
});
