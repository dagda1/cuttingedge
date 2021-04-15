import { expect, it, describe } from '@jest/globals';
import { ExternalLink } from '.';
import { render } from '@testing-library/react';

describe('<ExternalLink />', () => {
  it('should render target and rel props', () => {
    const { getByTestId } = render(
      <ExternalLink dataSelector="the-a" href="http://blah.com/">
        Blah
      </ExternalLink>,
    );

    const a = getByTestId('the-a') as HTMLAnchorElement;

    expect(a.href).toBe('http://blah.com/');
    expect(a.target).toBe('_blank');
    expect(a.rel).toBe('noopener noreferrer');
    expect(a.innerHTML).toBe('Blah');
  });

  it('should add aria-label and aria-labelledby attributes', () => {
    const { getByLabelText } = render(
      <ExternalLink ariaLabel="label" ariaLabelledBy="labelled by" dataSelector="the-a" href="http://blah.com/">
        Blah
      </ExternalLink>,
    );

    const button = getByLabelText('label') as HTMLAnchorElement;

    expect(button.getAttribute('aria-labelledby')).toBe('labelled by');
  });
});
