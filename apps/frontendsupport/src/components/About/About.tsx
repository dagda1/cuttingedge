import { Box, Heading, List, PageBlock, Stack, Text, TextLink } from '@cutting/component-library';

import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage';

export function About(): JSX.Element {
  return (
    <Box display="flex" justifyContent="center">
      <PageBlock>
        <Box component="section">
          <Stack space="large">
            <Heading level="1">Performance-first frontend</Heading>
            <Box>
              <LazyLoadedImage
                src="https://res.cloudinary.com/ddospxsc8/image/upload/v1690230987/me_voddxj.png"
                layout="constrained"
                alt="Paul Cowan (CEO)"
                loading="lazy"
              />
            </Box>
            <Heading level="2">
              <TextLink external href="https://www.linkedin.com/in/paul-cowan-19bb1116/">
                Paul Cowan (CEO)
              </TextLink>
            </Heading>
            <Text>
              I help teams make modern websites and web apps noticeably faster so key pages load quickly, feel
              responsive, and stay visually stable.
            </Text>
            <Text component="p">
              Most of my work is performance-focused: reducing JavaScript bloat, improving rendering (SSR/CSR), caching,
              taming third-party scripts, and turning slow pages into measurable wins.
            </Text>
            <Text component="p">
              I’m an open-source fanatic with countless&nbsp;
              <TextLink
                external
                href="https://cutting.scot/oss"
                data-testid="external-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                merged pull requests
              </TextLink>
              &nbsp;across numerous major repositories.
            </Text>
            <Text component="p">
              I write professionally for&nbsp;
              <TextLink external href="https://blog.logrocket.com/author/paulcowan/">
                LogRocket
              </TextLink>
              &nbsp;and on my own&nbsp;
              <TextLink external href="https://thesoftwaresimpleton.com">
                personal blog
              </TextLink>
              , often about practical web performance.
            </Text>
            <Text component="p">
              I have 25+ years of experience shipping and improving frontends for organisations such as
            </Text>
            <List>
              <Text>
                The digital transformation of disclosure scotland for both the&nbsp;
                <TextLink external href="https://basic.apply.disclosure.scot">
                  basic disclosure&nbsp;
                </TextLink>
                and the&nbsp;
                <TextLink external href="https://csg.apply.disclosure.scot">
                  PVG scheme&nbsp;
                </TextLink>
                digital online forms that replaced legacy or paper based alternatives.
              </Text>
              <Text>
                <TextLink external href="https://waitrose.com">
                  waitrose
                </TextLink>
              </Text>
              <Text tone="primary">
                <TextLink external href="https://www.theoceanrace.com/">
                  the Volvo ocean race
                </TextLink>
              </Text>
            </List>
            <Text>
              I run short performance sprints that audit, fix, and prove improvements with clear before/after results.
            </Text>
            <Text>
              I’m pragmatic, fast-moving, and focused on impact: fewer bytes shipped, faster interactions, and smoother
              page experiences.
            </Text>
          </Stack>
        </Box>
      </PageBlock>
    </Box>
  );
}
