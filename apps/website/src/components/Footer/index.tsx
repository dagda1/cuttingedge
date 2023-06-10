import { Column, Columns, TextLink, Inline, Box, Stack, Text, PageBlock } from '@cutting/component-library';
import cow from '~/assets/images/cow-logo-small2.png';
import { footerPages } from '~/routes';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import github from '~/assets/images/github.png';
import twitter from '~/assets/images/twitter.png';

export function Footer(): JSX.Element {
  return (
    <PageBlock>
      <Columns space="large" alignY="top">
        <Column width="content">
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
        <Column>
          <Stack space="medium">
            <Box>
              <Inline space="small" alignY="center">
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
            </Box>
            <Box>
              <Text size="xsmall">Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved</Text>
            </Box>
          </Stack>
        </Column>
      </Columns>
    </PageBlock>
  );
}
