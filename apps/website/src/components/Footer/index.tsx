import { footerPages } from '~/routes';
import { Column, Columns, ContentBlock, ExternalLink, Inline, Box, Stack, Text } from '@cutting/component-library';

import * as styles from './Footer.css';
import { Cow } from '../Svg/Cow';
import { Github } from '../Svg/Github';
import { Twitter } from '../Svg/Twitter';
import { TextNavLink } from '../TextNavLink/TextNavLink';

export function Footer(): JSX.Element {
  return (
    <ContentBlock width="large">
      <Columns space="large">
        <Column>
          <Inline space="large" alignY="top">
            <div className={styles.logo}>
              <Inline alignY="center">
                <div className={styles.logoContainer}>
                  <Cow />
                </div>
                <Text component="span" className={styles.name}>
                  Paul Cowan
                </Text>
              </Inline>
            </div>
            <div className={styles.links}>
              <Stack space="large">
                {footerPages.map((page) => (
                  <TextNavLink key={page.path} to={page.path}>
                    {page.heading}
                  </TextNavLink>
                ))}
              </Stack>
            </div>
          </Inline>
        </Column>
        <Column>
          <Stack space="medium">
            <Box>
              <Inline space="large">
                <ExternalLink href="https://github.com/dagda1" ariaLabel="Github profile">
                  {/* <Github /> */}
                  Github
                </ExternalLink>
                <ExternalLink href="https://twitter.com/dagda1" ariaLabel="twitter profile">
                  {/* <Twitter /> */}
                  Twitter
                </ExternalLink>
                <ExternalLink href="mailto:paul.cowan@cutting.scot">paul.cowan@cutting.scot</ExternalLink>
              </Inline>
            </Box>
            <Box>
              <Text component="div" className={styles.copyright}>
                Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved
              </Text>
            </Box>
          </Stack>
        </Column>
      </Columns>
    </ContentBlock>
  );
}
