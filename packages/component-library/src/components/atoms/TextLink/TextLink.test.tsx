import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextLink } from './TextLink';

describe('<TextLink />', () => {
  it('should render target and rel props', () => {
    const { getByRole } = render(
      <TextLink external href="http://blah.com/" blank>
        Blah
      </TextLink>,
    );

    const a = getByRole('link') as HTMLAnchorElement;

    expect(a.href).toBe('http://blah.com/');
    expect(a.target).toBe('_blank');
    expect(a.rel).toBe('noopener noreferrer');
    expect(a?.innerHTML).toBe('Blah');
  });

  it('should add aria-label and aria-labelledby attributes', () => {
    const { getByLabelText } = render(
      <TextLink external ariaLabel="label" ariaLabelledBy="labelled by" href="http://blah.com/">
        Blah
      </TextLink>,
    );

    const button = getByLabelText('label') as HTMLAnchorElement;

    expect(button.getAttribute('aria-labelledby')).toBe('labelled by');
  });
});
