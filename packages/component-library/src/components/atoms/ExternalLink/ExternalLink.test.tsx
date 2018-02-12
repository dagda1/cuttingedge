import { mount } from 'enzyme';
import * as React from 'react';
import { ExternalLink } from '.';

describe('<ExternalLink />', () => {
  it('should render target and rel props', () => {
    const externalLink = mount(<ExternalLink href="http://blah.com">Blah</ExternalLink>);

    const wrapper = externalLink.find('a');

    const { href, target, rel } = wrapper.props();

    expect(href).toBe('http://blah.com');
    expect(target).toBe('_blank');
    expect(rel).toBe('noopener noreferrer');
    expect(wrapper.text()).toBe('Blah');
  });
});
