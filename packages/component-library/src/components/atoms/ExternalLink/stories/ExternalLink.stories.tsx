import type { ComponentMeta } from '@storybook/react';
import { themedSelect, themedTemplateMaker } from '../../../stories/Stories';
import { ExternalLink } from '../ExternalLink';

export default {
  title: 'atoms/ExternalLink',
  component: ExternalLink,
  argTypes: {
    ...themedSelect(),
    href: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof ExternalLink>;

const Template = themedTemplateMaker(ExternalLink);

export const Link = Template.bind({});

Link.args = {
  href: 'https://news.bbc.co.uk',
  children: 'news',
};
