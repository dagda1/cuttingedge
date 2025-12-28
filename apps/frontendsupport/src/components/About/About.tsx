import { Box, Heading, List, PageBlock, Stack, Text, TextLink } from '@cutting/component-library';

import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage';

export function About(): JSX.Element {
  return (
    <Box display="flex" justifyContent="center">
      <PageBlock>
        <Box component="section">
          <Stack space="large">
            <Heading level="1">My story</Heading>
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
              My passion is and always has been frontend development. I love the instant visual feedback that is unique
              to frontend development.
            </Text>
            <Text component="p">
              I’m an open-source fanatic with countless &nbsp;
              <TextLink
                external
                href="https://cutting.scot/oss"
                data-testid="external-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                merged pull requests&nbsp;
              </TextLink>
              across numerous major repositories.
            </Text>
            <Text component="p">
              I write professionally for&nbsp;
              <TextLink external href="https://blog.logrocket.com/author/paulcowan/">
                logrocket
              </TextLink>
              &nbsp;and my own&nbsp;
              <TextLink external href="https://thesoftwaresimpleton.com">
                personal blog.
              </TextLink>
            </Text>
            <Text component="p">
              I have over 25+ years of experience working on some exceptional frontend pieces of work for such as&nbsp;
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
            <Text>I build and repair complex React frontends so products can launch on time.</Text>
            <Text>
              At 55 years of age, I have more experience than most and I get results in a fraction of the time.
            </Text>
          </Stack>
        </Box>
      </PageBlock>
    </Box>
  );
}
