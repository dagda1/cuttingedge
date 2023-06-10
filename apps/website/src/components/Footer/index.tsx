import { Column, Columns, TextLink, Inline, Stack, Text, PageBlock } from '@cutting/component-library';
import cow from '~/assets/images/cow-logo-small2.png';
import { footerPages } from '~/routes';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import github from '~/assets/images/github.png';
import twitter from '~/assets/images/twitter.png';

export function Footer(): JSX.Element {
  return (
    <PageBlock>
      <Columns align="center" space="xsmall" alignY="top" collapseBelow="tablet">
        <Column>
          <Inline alignY="center">
            <img src={cow} alt="cutting-edge cow logo" />
            <Text component="span">Paul Cowan</Text>
          </Inline>
        </Column>
        <Column>
          <Stack space="medium">
            {footerPages.map((page) => (
              <TextNavLink key={page.path} to={page.path}>
                {page.heading}
              </TextNavLink>
            ))}
          </Stack>
        </Column>
        <Column width="1/2">
          <Stack space={{ mobile: 'xsmall', tablet: 'xxsmall' }}>
            <Inline space="small" align={{ mobile: 'center', tablet: 'left' }} alignY="center">
              <TextLink external href="mailto:paul.cowan@cutting.scot">
                paul.cowan@cutting.scot
              </TextLink>
              <TextLink external href="https://github.com/dagda1" ariaLabel="Github profile">
                <img src={github} alt="github" />
              </TextLink>
              <TextLink external href="https://twitter.com/dagda1" ariaLabel="twitter profile">
                <img src={twitter} alt="twitter" />
              </TextLink>
            </Inline>
            <Text size="xsmall">Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved</Text>
          </Stack>
        </Column>
      </Columns>
    </PageBlock>
  );
}
