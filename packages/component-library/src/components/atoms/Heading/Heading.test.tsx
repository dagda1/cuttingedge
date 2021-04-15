import { expect, it, describe } from '@jest/globals';
import { Heading, HeadingProps } from '.';
import { render } from '@testing-library/react';

const wrap = (props: HeadingProps = {}) => render(<Heading {...props} />);

describe('Heading', () => {
  it('renders children when passed in', () => {
    const { getByText } = wrap({ children: 'test' });

    expect(getByText('test').tagName.toLowerCase()).toBe('h1');
  });

  it('renders props when passed in', () => {
    const { container } = wrap({ id: 'foo' });

    expect(container.querySelector('#foo')).toBeTruthy();
  });

  it('renders H1 by default', () => {
    const { container } = wrap();

    expect(container.querySelector('h1')).toBeTruthy();
  });

  it('renders hLevel when passed in', () => {
    const { container } = wrap({ level: 2 });

    expect(container.querySelector('h2')).toBeTruthy();
  });
});
