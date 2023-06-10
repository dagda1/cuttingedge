import { Column, Columns, TextLink, Inline, Box, Stack, Text, PageBlock } from '@cutting/component-library';
import cow from '~/assets/images/cow-logo-small2.png';
// import { Github } from '../Svg/Github';
// import { Twitter } from '../Svg/Twitter';

export function Footer(): JSX.Element {
  return (
    <PageBlock width="large">
      <Columns space="small">
        <Column>
          <Inline space="small" component="span">
            <img src={cow} alt="cutting-edge cow logo" />
            <Text component="span">Paul Cowan</Text>
            {/* <div className={styles.links}>
              <Stack space="large">
                {footerPages.map((page) => (
                  <TextNavLink key={page.path} to={page.path}>
                    {page.heading}
                  </TextNavLink>
                ))}
              </Stack>
            </div> */}
          </Inline>
        </Column>
        <Column>
          <Stack space="medium">
            <Box>
              <Inline space="large">
                <TextLink external href="https://github.com/dagda1" ariaLabel="Github profile">
                  {/* <Github /> */}
                  Github
                </TextLink>
                <TextLink external href="https://twitter.com/dagda1" ariaLabel="twitter profile">
                  {/* <Twitter /> */}
                  Twitter
                </TextLink>
                <TextLink external href="mailto:paul.cowan@cutting.scot">
                  paul.cowan@cutting.scot
                </TextLink>
              </Inline>
            </Box>
            {/* <Box>
              <Text component="div" className={styles.copyright}>
                Copyright © Cutting-Edge Solutions (Scotland) inc. All rights reserved
              </Text>
            </Box> */}
          </Stack>
        </Column>
      </Columns>
    </PageBlock>
  );
}
