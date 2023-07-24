import { Box, Heading, PageBlock, TextLink, Text, Inline, Stack, List } from '@cutting/component-library';
import { Image } from '@unpic/react';

export default function Services(): JSX.Element {
  return (
    <Box marginTop="xxxlarge" display="flex" justifyContent="center">
      <PageBlock>
        <Box component="section">
          <Stack space="medium">
            <Heading level="1">Our story</Heading>
            <Box>
              <Image
                src="https://res.cloudinary.com/ddospxsc8/image/upload/v1690189715/me_jifefm.png"
                layout="constrained"
                width={200}
                height={200}
                alt="Paul Cowan (CEO)"
              />
            </Box>
            <h2>
              <TextLink tone="promote" external href="https://www.linkedin.com/in/paul-cowan-19bb1116/">
                Paul Cowan (CEO)
              </TextLink>
            </h2>
            <Text>
              My passion is and always has been frontend development. I love the instant visual feedback that is unique
              to frontend development.
            </Text>
            <Inline>
              <Text>I am an open-source fanatic with over&nbsp;</Text>
              <TextLink
                tone="promote"
                external
                href="https://github.com/pulls?q=is%3Amerged+is%3Apr+author%3Adagda1+-user%3Adagda1"
                data-testid="external-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                140+ merged pull requests in the past 12 months&nbsp;
              </TextLink>
              <Text>into many, many, many open source repositories.</Text>
            </Inline>
            <Inline>
              <Text>I write professionally for&nbsp;</Text>
              <TextLink tone="promote" external href="https://blog.logrocket.com/author/paulcowan/">
                logrocket
              </TextLink>
              <Text>&nbsp;and my own&nbsp;</Text>
              <TextLink tone="promote" external href="https://thesoftwaresimpleton.com">
                personal blog.
              </TextLink>
            </Inline>
            <Inline>
              <Text>
                I have over 20 years of experience working on some exceptional frontend pieces of work for companies
                such as&nbsp;
              </Text>
              <List>
                <Inline>
                  <Text>The digital transformation of disclosure scotland for both the&nbsp;</Text>{' '}
                  <TextLink tone="promote" external href="https://basic.apply.disclosure.scot/">
                    basic disclosure&nbsp;
                  </TextLink>
                  <Text>and the&nbsp;</Text>
                  <TextLink tone="promote" external href="https://csg.apply.disclosure.scot/">
                    PVG scheme
                  </TextLink>
                </Inline>
                <TextLink tone="promote" external href="https://waitrose.com">
                  waitrose
                </TextLink>
                <TextLink
                  tone="promote"
                  external
                  href="https://www.volvogroup.com/en/about-us/history-and-r-d-milestones/volvo-ocean-race.html"
                >
                  the Volvo ocean race
                </TextLink>
              </List>
            </Inline>
            <Text>
              I put a lot of my success as a frontend developer down to my ability to construct the best frontend
              development environment to allow development teams to flourish.
            </Text>
            <Text>
              At 50+ years of age, I have more experience than most and I get results at a fraction of the time.
            </Text>
          </Stack>
        </Box>
      </PageBlock>
    </Box>
  );
}
